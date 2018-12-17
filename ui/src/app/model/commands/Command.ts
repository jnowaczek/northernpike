export interface Command {
	execute(): void;

	serialize(): string;
}
