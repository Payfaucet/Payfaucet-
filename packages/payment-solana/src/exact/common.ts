import { generateRequirementsMatcher } from "@payfaucet/types/x402";
import { lookupX402Network } from "@payfaucet/info/solana";

export const x402Scheme = "exact";

export function generateMatcher(network: string, asset: string) {
  return generateRequirementsMatcher([x402Scheme], lookupX402Network(network), [
    asset,
  ]);
}
