import type { i } from 'node_modules/@react-router/dev/dist/routes-DHIOx0R9'

export interface ILoginRequest {
    UserName: string
    Password: string
    RememberMe: boolean
}

export interface ILoginResponse {
    Data: {
        AccessToken: string
        RefreshToken: string
    }
}

export interface IRegisterRequest {
    UserName: string
    Password: string
    ConfirmPassword: string
    Email: string
    PhoneNumber: string
}

export interface IUserModel {
    Name: string
    Id: string
    Fullname: string
    RoleName: string
    OrgCode: string
    OrgPath: string
    DeptId?: string
    DeptName?: string
}
