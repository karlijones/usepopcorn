export default function StarRating() {
  const containerStyle={
    display: "flex",
    alignItems: "center",
    gap: "16px",
  };  
    
    return (
        <div style={containerStyle}>
            <div>
                {Array.from({length: 5}, (_, i) => (
                    <span>S{i+1}</span>))}
            </div>
            <p>10</p>
        </div>
    );
}