{
  description = "TypeScript development environment.";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodejs = pkgs.nodejs_22;
      in
      {
        formatter = pkgs.nixfmt-rfc-style;
        devShells = {
          default = pkgs.mkShell {
            name = "devshell";

            buildInputs = with pkgs; [
              git
              nixfmt-rfc-style
              nodejs
              (nodePackages.pnpm.override { inherit nodejs; })
            ];
          };
        };
      }
    );
}
