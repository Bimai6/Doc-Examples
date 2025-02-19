/**
 * Botón reutilizable para aplicaciones en React.
 * 
 * @component
 * @example
 * return (
 *   <Button primary={true}>Clic aquí</Button>
 * );
 * 
 * @param {Object} props - Propiedades del botón.
 * @param {boolean} props.primary - Indica si el botón es primario.
 * @param {React.ReactNode} props.children - Contenido del botón.
 */
function Button({ primary, children }) {
    return (
        <button style={{ background: primary ? 'blue' : 'gray', color: 'white' }}>
            {children}
        </button>
    );
}

export default Button;