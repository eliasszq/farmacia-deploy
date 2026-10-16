export interface clienteDTO {
    idUsuario?: number;
    nome:       string;
    email:      string;
    cpf:        string;
    senha:      string;
    role?:      "cliente" | "admin";
}