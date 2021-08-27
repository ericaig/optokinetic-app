import { createContext, useContext, useReducer, Dispatch } from "react";
import { ReducerAction } from "@interfaces/reducer";
import { DIRECTIONS, SPIN_DIRECTIONS } from "@enums/directions";

export enum ACTIONS {
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

// https://stackoverflow.com/a/40076355/3410660
type DeepPartial<T> = {
    [P in keyof T]?: T[P];
}

interface ConfiguratorCtxInterface {
    particles: ParticlesItemsInterface,
    page: PageItemsInterface,
    dot: DotItemsInterface,
    dispatch: Dispatch<ReducerAction<ACTIONS>>
}

function reducer(state: ConfiguratorCtxInterface, action: ReducerAction<ACTIONS>) {
    const updateParticleProps = (_update = {} as DeepPartial<ParticlesItemsInterface>) => ({ ...state, particles: { ...state.particles, ..._update } } as ConfiguratorCtxInterface)
    const updatePageProps = (_update = {} as DeepPartial<PageItemsInterface>) => ({ ...state, page: { ...state.page, ..._update } } as ConfiguratorCtxInterface)
    const updateDotProps = (_update = {} as DeepPartial<DotItemsInterface>) => ({ ...state, dot: { ...state.dot, ..._update } } as ConfiguratorCtxInterface)

    switch (action.type) {
        // Particles
        case ACTIONS.UPDATE_PARTICLES_DIRECTION:
            return updateParticleProps({ direction: action.payload.direction })
        case ACTIONS.UPDATE_PARTICLES_COUNT:
            return updateParticleProps({ count: action.payload.count })
        case ACTIONS.UPDATE_PARTICLES_SIZE:
            return updateParticleProps({ size: action.payload.size })
        case ACTIONS.UPDATE_PARTICLES_SPEED:
            return updateParticleProps({ speed: action.payload.speed })
        case ACTIONS.UPDATE_PARTICLES_COLOR:
            return updateParticleProps({ color: action.payload.color })

        // Page
        case ACTIONS.UPDATE_PAGE_SPIN_DIRECTION:
            return updatePageProps({ spin: action.payload.spin })
        case ACTIONS.UPDATE_PAGE_SPIN_SPEED:
            return updatePageProps({ speed: action.payload.speed })
        case ACTIONS.UPDATE_PAGE_COLOR:
            return updatePageProps({ color: action.payload.color })

        // Dot
        case ACTIONS.UPDATE_DOT_STATE:
            return updateDotProps({ enabled: action.payload.enabled })
        case ACTIONS.UPDATE_DOT_SIZE:
            return updateDotProps({ size: action.payload.size })
        case ACTIONS.UPDATE_DOT_DISPLACEMENT_DELAY:
            return updateDotProps({ displacementDelay: action.payload.displacementDelay })
        case ACTIONS.UPDATE_DOT_COLOR:
            return updateDotProps({ color: action.payload.color })
        default:
            throw new Error(`Unhandled action type: ${action.type}`)
    }
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
    dispatch: (_) => { }
}

const ConfiguratorContext = createContext<ConfiguratorCtxInterface | undefined>(undefined)

export function useConfiguratorContext() {
    // https://kentcdodds.com/blog/how-to-use-react-context-effectively#typescript

    const context = useContext(ConfiguratorContext)

    if (context === undefined) {
        throw new Error("useConfiguratorContext must be within ConfiguratorContext")
    }

    return context
}

export default function ConfiguratorProvider({ children }: any) {
    const [state, dispatch] = useReducer(reducer, defaultValues)

    const updatePageColor = (v: string) => dispatch({ type: ACTIONS.UPDATE_PAGE_COLOR, payload: { color: v } })

    console.log(state);
    

    return <ConfiguratorContext.Provider value={{ ...state, dispatch }}>
        {children}
    </ConfiguratorContext.Provider>
}