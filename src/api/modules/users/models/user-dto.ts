import { User } from "./user-entity";
import { UserRoles } from "./user-roles";

export class UserDto implements Omit<User, "id"> {
    readonly googleid: string;
    readonly name?: string | undefined;
    readonly email?: string | undefined;
    readonly role: UserRoles;

    constructor(
        googleid: string,
        name?: string | undefined,
        email?: string | undefined,
        role: UserRoles = UserRoles.User,
    ) {
        this.googleid = googleid;
        this.name = name;
        this.email = email;
        this.role = role;
    }
}
