export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (<div className="p-2 mb-4">
        <div >{children}</div>
        </div>
    );
  }