import { Table, Column, Model, DataType, PrimaryKey, AllowNull, ForeignKey, BelongsTo, HasMany, AutoIncrement, HasOne } from 'sequelize-typescript';

@Table({
    tableName: 'order',
    freezeTableName: true,
    timestamps: true,
    paranoid: true,
    createdAt: 'dibuat',
    updatedAt: 'diubah',
    deletedAt: 'dihapus'
})
class OrderModel extends Model {
    @PrimaryKey    
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    quantity!: number;

    @AllowNull(false)
    @Column(DataType.STRING(50))
    customerName!: string;    

    @AllowNull(false)
    @Column(DataType.STRING(50))
    status!: string;    

    @AllowNull(false)
    @Column(DataType.INTEGER)
    productId!: number;
    
}

export default OrderModel;