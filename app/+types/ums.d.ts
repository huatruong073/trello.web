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
