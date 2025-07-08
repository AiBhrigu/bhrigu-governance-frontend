import { IDL } from "@dfinity/candid";

export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'add_proposal': IDL.Func([IDL.Text], [], []),
    'get_owner': IDL.Func([], [IDL.Text], ['query']),
    'get_proposals': IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
  });
};
