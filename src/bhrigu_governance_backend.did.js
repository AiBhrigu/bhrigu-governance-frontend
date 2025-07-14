export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    status: IDL.Func([], [IDL.Text], ["query"]),
    greet: IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
