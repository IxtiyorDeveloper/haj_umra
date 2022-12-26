import OrderModel from "../schema/order";

export const addOrder = async (body: { [key: string]: any }) => {
    await OrderModel.create(body)
}