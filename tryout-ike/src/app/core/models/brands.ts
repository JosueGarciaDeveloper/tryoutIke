export interface Brands {
    Marcas: [BrandsValues],
    Reg_entregados: number,
    Tot_reg_busqueda: number,
    Tot_marcas: number,
};
export interface BrandsValues {
    id_marca: number,
    nombre_marca: String,
    logo_marca: String,
    imagen_marca: String,
    telefono_marca: String,
    url_marca: String,
    vigencia_marca: String,
    promo_marca: String,
    restricciones_marca: String,
    categoria_marca: string,

}