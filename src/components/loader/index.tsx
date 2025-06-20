import spinner from "../../assets/new-loader.gif";

export default function Loader() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexDirection: 'column',
            gap: '1rem'
        }}>
            <img 
                width={100} 
                src={spinner} 
                alt="spinner" 
                style={{ display: 'block' }}
            />
            <p className="text-4xl font-semibold">JAYS PLACE</p>
        </div>
    )
}