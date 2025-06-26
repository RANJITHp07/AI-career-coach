
export interface SuccessResponse<T> {
    success: true;
    message: string;
    data: T;
}

export function successResponse<T>(message: string, data: T) {
    return {
        success: true,
        message,
        data,
    } as SuccessResponse<T>;
}