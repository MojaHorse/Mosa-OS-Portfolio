import TerminalEmulator from "@/components/TerminalEmulator";

export default function CLIPage() {
  return (
    <main className="fixed inset-0 w-full h-full bg-neo-black z-[9999] overflow-auto">
      <TerminalEmulator />
    </main>
  );
}
