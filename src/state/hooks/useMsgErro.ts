import { useRecoilValue } from "recoil"
import { erroState } from "../atom"

export const useMsgErro= () => {
    const msg = useRecoilValue(erroState)
    return msg;
}