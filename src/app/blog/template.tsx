export default function BlogTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h1>Blog Template</h1>
      {children}
    </div>
  );
}
