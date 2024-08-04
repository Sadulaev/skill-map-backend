import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'auth_data' })
export class AuthData {
    @PrimaryColumn({ name: 'user_id' })
    userId: number;

    @Column({ name: 'token' })
    token: string;

    @Column({ name: 'device' })
    device: string;

    @Column({ name: 'ip' })
    ip: string;
}