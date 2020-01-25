import { Dijkstra } from '../algorithms'

const setCurrentAlgorithm = (state: StateContext["currentAlgorithm"], action: any) => {
    switch (action.currentAlgorithm) {
        case "Dijkstra":
            return Dijkstra
        case "A*":
            return Dijkstra
        default:
            return state
    }
}

export default setCurrentAlgorithm;
