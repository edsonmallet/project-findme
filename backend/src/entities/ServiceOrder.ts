import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm'
import { Client } from './Client';
import { User } from './User';

@Entity('services_orders')
export class ServiceOrder {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @Column()
    public problem: string;

    @Column()
    public client_id: string;

    @OneToOne(() => Client)
    @JoinColumn({ name: 'client_id' })
    public client: Client

    @Column()
    public user_id: string;

    @OneToOne(() => User)
    @JoinColumn({ name: 'user_id' })
    public user: User

    @Column()
    public latlng: string;

    @CreateDateColumn()
    public created_at: Date

    @UpdateDateColumn()
    public update_at: Date
}
