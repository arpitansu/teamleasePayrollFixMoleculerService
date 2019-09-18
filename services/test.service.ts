import {Service, Action, BaseSchema} from "moleculer-decorators"
import ResponseHandler from "../handler/GlobalResponse";

@Service({name : "arpittest"})
class test extends BaseSchema{

    @Action()
    public t(ctx : any){
        // console.log(ctx)
        return ResponseHandler.successResponse(ctx, 200, "hello form test", {})
    }

} 


module.exports = test