export const generateMetadata = () => ({
  title: "Slug Page - No Blog Layout",
});
export default function SlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1>Dashboard SlugLayout</h1>
      {children}
    </div>
  );
}
