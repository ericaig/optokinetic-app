import { createContext, useContext, useReducer, Dispatch, useEffect } from "react";
import { DIRECTIONS, SPIN_DIRECTIONS } from "@enums/directions";
import ReducerAction from "@interfaces/reducer";
import { DeepPartial } from "@interfaces/deep-partial";

const STORAGE_KEY = "tmpConfig";

export enum ACTIONS {
    SET_INITIAL_CONFIG,

    // particles
    UPDATE_PARTICLES_DIRECTION,
    UPDATE_PARTICLES_COUNT,
    UPDATE_PARTICLES_SIZE,
    UPDATE_PARTICLES_SPEED,
    UPDATE_PARTICLES_COLOR,

    // page
    UPDATE_PAGE_SPIN_DIRECTION,
    UPDATE_PAGE_SPIN_SPEED,
    UPDATE_PAGE_COLOR,

    // dot
    UPDATE_DOT_STATE,
    UPDATE_DOT_SIZE,
    UPDATE_DOT_DISPLACEMENT_DELAY,
    UPDATE_DOT_COLOR,
}

interface ParticlesItemsInterface {
    /**
     * The particles movement direction
     */
    direction: DIRECTIONS,
    count: number,
    size: number[],
    speed: number,
    color: string
}

interface PageItemsInterface {
    /**
     * The page's spin / rotation direction 
     */
    spin: SPIN_DIRECTIONS,

    /**
     * The spin speed
     */
    speed: number,
    color: string
}

interface DotItemsInterface {
    enabled: boolean,
    size: number,
    /**
     * The time it takes before the 'Dot' changes screen position / location.
     * In `seconds`
     */
    displacementDelay: number,
    color: string
}

interface ConfiguratorCtxInterface {
    particles: ParticlesItemsInterface,
    page: PageItemsInterface,
    dot: DotItemsInterface,
    dispatch: Dispatch<ReducerAction<ACTIONS>>,
    // dispatchers: { [key: string]: (...args: any) => void },
}

const saveToLocalStorage = (state: ConfiguratorCtxInterface) => {
    return window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state || {}))
}

export const retrieveConfigFromLocalStorage = () => {
    const res = window.localStorage.getItem(STORAGE_KEY)
    return (res ? JSON.parse(res) : defaultValues) as ConfiguratorCtxInterface
}

function reducer(state: ConfiguratorCtxInterface, action: ReducerAction<ACTIONS>) {
    const updateParticleProps = (_update = {} as DeepPartial<ParticlesItemsInterface>) => ({ ...state, particles: { ...state.particles, ..._update } } as ConfiguratorCtxInterface)
    const updatePageProps = (_update = {} as DeepPartial<PageItemsInterface>) => ({ ...state, page: { ...state.page, ..._update } } as ConfiguratorCtxInterface)
    const updateDotProps = (_update = {} as DeepPartial<DotItemsInterface>) => ({ ...state, dot: { ...state.dot, ..._update } } as ConfiguratorCtxInterface)

    let newState

    switch (action.type) {
        case ACTIONS.SET_INITIAL_CONFIG:
            newState = action.payload as ConfiguratorCtxInterface
            break;

        // Particles
        case ACTIONS.UPDATE_PARTICLES_DIRECTION:
            newState = updateParticleProps({ direction: action.payload.direction })
            break;
        case ACTIONS.UPDATE_PARTICLES_COUNT:
            newState = updateParticleProps({ count: action.payload.count })
            break;
        case ACTIONS.UPDATE_PARTICLES_SIZE:
            newState = updateParticleProps({ size: action.payload.size })
            break;
        case ACTIONS.UPDATE_PARTICLES_SPEED:
            newState = updateParticleProps({ speed: action.payload.speed })
            break;
        case ACTIONS.UPDATE_PARTICLES_COLOR:
            newState = updateParticleProps({ color: action.payload.color })
            break;

        // Page
        case ACTIONS.UPDATE_PAGE_SPIN_DIRECTION:
            newState = updatePageProps({ spin: action.payload.spin })
            break;
        case ACTIONS.UPDATE_PAGE_SPIN_SPEED:
            newState = updatePageProps({ speed: action.payload.speed })
            break;
        case ACTIONS.UPDATE_PAGE_COLOR:
            newState = updatePageProps({ color: action.payload.color })
            break;

        // Dot
        case ACTIONS.UPDATE_DOT_STATE:
            newState = updateDotProps({ enabled: action.payload.enabled })
            break;
        case ACTIONS.UPDATE_DOT_SIZE:
            newState = updateDotProps({ size: action.payload.size })
            break;
        case ACTIONS.UPDATE_DOT_DISPLACEMENT_DELAY:
            newState = updateDotProps({ displacementDelay: action.payload.displacementDelay })
            break;
        case ACTIONS.UPDATE_DOT_COLOR:
            newState = updateDotProps({ color: action.payload.color })
            break;
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }

    saveToLocalStorage(newState)

    return newState
}

const defaultValues: ConfiguratorCtxInterface = {
    page: {
        color: "#000000",
        spin: SPIN_DIRECTIONS.NONE,
        speed: 50
    },
    particles: {
        direction: DIRECTIONS.UP,
        color: "#ffffff",
        count: 200,
        size: [0, 30],
        speed: 20,
    },
    dot: {
        enabled: false,
        size: 50,
        displacementDelay: 3,
        color: "#ff6666"
    },
    dispatch: (_) => { },
    // dispatchers: {}
}

const ConfiguratorContext = createContext<ConfiguratorCtxInterface | undefined>(undefined)

export function useConfiguratorContext() {
    // https://kentcdodds.com/blog/how-to-use-react-context-effectively#typescript

    const context = useContext(ConfiguratorContext)

    if (context === undefined) {
        throw new Error("Hook [useConfiguratorContext] must be within [ConfiguratorContext]")
    }

    return context
}

export default function ConfiguratorProvider({ children, initialValues = {} }: any) {
    // let _defValues = defaultValues

    const [state, dispatch] = useReducer(reducer, defaultValues)

    useEffect(() => {
        console.log("Use Effect", window);
        dispatch({ type: ACTIONS.SET_INITIAL_CONFIG, payload: retrieveConfigFromLocalStorage() })
    },[])

    return <ConfiguratorContext.Provider
        value={{
            ...state,
            dispatch
        }}
    >
        {children}
    </ConfiguratorContext.Provider>
}