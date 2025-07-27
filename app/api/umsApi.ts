import type { ILoginRequest } from '~/+types/ums'
import { HttpClient } from '~/utils/httpClient'

export const UmsApi = {
    Auth: {
        login: async (data: ILoginRequest) => {
            return await HttpClient.post('auth/login', data)
        },
        logout: async () => {
            return await HttpClient.post('auth/logout', {})
        },
    },
}
