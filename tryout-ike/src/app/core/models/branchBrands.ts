export interface BranchBrands {
    Marcas: [ValueBranchBrands];
    Reg_entregados: number;
    Tot_reg_busqueda: number;
    Tot_marcas: number
}
export interface ValueBranchBrands {
    id_marca: number;
    nombre_marca: String;
    logo_marca: String;
    telefono_marca: String;
    url_marca: String;
    vigencia_marca: string
    promo_marca: String;
    restricciones_marca: String;
    categoria_marca: String;
    Sucursales: [Branches]

}
export interface Branches {
    id_sucursal: number;
    nombre: String;
    telefono: any;
    num_int: String;
    num_ext: number;
    referencia: String;
    latitud: any;
    longitud: any;
    cp: number;
    zona: String;
    banco_adq: String;
    num_afiliacion: String
}