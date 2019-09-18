"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { MoleculerClientError } = require("moleculer").Errors;
const { MoleculerError } = require("moleculer").Errors;
class ResponseHandler {
    // public static successResponse(ctx: any, statusCode: number, message: string, data: any) {
    //     ctx.meta.status = true;
    //     ctx.meta.statusCode = statusCode;
    //     ctx.meta.message = message;
    //     ctx.meta.data = data;
    // }
    // public static errorResponse(statusCode: number, message: string, data: any) {
    //     throw new MoleculerClientError(message, statusCode, "", { data: data });
    // }
    static async successResponse(ctx, statusCode, message, data) {
        ctx.meta.status = true;
        ctx.meta.statusCode = statusCode;
        ctx.meta.message = message;
        ctx.meta.payload = data;
        ctx.meta.$statusCode = statusCode;
        return await ctx.meta;
    }
    static errorResponse(statusCode, message, data) {
        throw new MoleculerError(message, statusCode, "", data);
    }
}
exports.default = ResponseHandler;
//# sourceMappingURL=GlobalResponse.js.map