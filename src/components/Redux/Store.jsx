import { legacy_createStore as createStore } from "redux";
import {root} from "./Reducer/index"
export let store = createStore(root)