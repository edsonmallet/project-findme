import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne } from 'typeorm'
import { ServiceOrder } from './ServiceOrder';
 
@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    public readonly id: string;

    @Column()
    public name: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    @OneToOne(() => ServiceOrder)
    public services_orders: ServiceOrder

    @CreateDateColumn()
    public created_at: Date

    @UpdateDateColumn()
    public update_at: Date
}
