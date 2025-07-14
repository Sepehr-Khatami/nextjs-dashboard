"use client";

export default function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1e1e2f",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          className='spinner'
          style={{
            border: "4px solid #f3f3f3",
            borderTop: "4px solid #3498db",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            margin: "0 auto",
          }}
        />
        <p
          style={{
            color: "#ffffff",
            fontFamily: "sans-serif",
            marginTop: "10px",
          }}
        >
          Loading...
        </p>
      </div>
      <style jsx>{`
        .spinner {
          animation: spin 2s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
