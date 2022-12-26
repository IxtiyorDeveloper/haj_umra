import EmailModel from "../schema/emails";

export const addEmail = async (email: string) => {
    await EmailModel.create({email})
}