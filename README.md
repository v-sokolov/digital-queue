## Before creating a new environment
- Register a new domain, for certificate approval / point it to Route53 (TBD)
- Do not add SOA to subdomain in the parent zone.

## AWS CLI
`rtfm`

## Docker
`rtfm`

## Prettier
`prettier . --write` or `rush-prettier` across all projects

## Rush
`npm install -g @microsoft/rush`

## Terraform

### Windows
`choco install terraform`

### Mac
`brew tap hashicorp/tap && brew install hashicorp/tap/terraform`

### Linux
`sudo apt-get update && sudo apt-get install -y gnupg software-properties-common curl`
`curl -fsSL https://apt.releases.hashicorp.com/gpg | sudo apt-key add -`
`sudo apt-add-repository "deb [arch=amd64] https://apt.releases.hashicorp.com $(lsb_release -cs) main"`
`sudo apt-get update && sudo apt-get install terraform`

### Terraform CDK
`npm install -g cdktf-cli@latest`