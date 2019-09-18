const { MoleculerClientError } = require("moleculer").Errors;
const { MoleculerError } = require("moleculer").Errors;

export default class ResponseHandler {

    // public static successResponse(ctx: any, statusCode: number, message: string, data: any) {
    //     ctx.meta.status = true;
    //     ctx.meta.statusCode = statusCode;
    //     ctx.meta.message = message;
    //     ctx.meta.data = data;
    // }

    // public static errorResponse(statusCode: number, message: string, data: any) {
    //     throw new MoleculerClientError(message, statusCode, "", { data: data });
    // }


    public static async successResponse(ctx: any, statusCode: number, message: string, data: any) {
        ctx.meta.status = true;
        ctx.meta.statusCode = statusCode;
        ctx.meta.message = message;
        ctx.meta.payload = data;
        ctx.meta.$statusCode = statusCode;
        return await ctx.meta;
    }

    public static errorResponse(statusCode: number, message: string, data: any) {
        throw new MoleculerError(message, statusCode, "", data);
    }
}