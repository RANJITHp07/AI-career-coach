import { UserService } from "../service/user.service"

const userService = new UserService()

export const signUpWebhook = async (event: any) => {
    const data = {
        email: event?.data?.email_addresses[0]?.email_address,
        clerkUserId: event?.data?.id,
        imageUrl: event?.data?.image_url,
        name: (event?.data?.first_name + event.data?.last_name) || '',
        lastLogin: new Date(event?.data?.last_sign_in_at),
        signInMethod: event?.data?.external_accounts?.length ? 'GOOGLE' : 'EMAIL' as any,
        createdAt: new Date(event?.data?.created_at)
    }

    await userService.createUser(data)
}