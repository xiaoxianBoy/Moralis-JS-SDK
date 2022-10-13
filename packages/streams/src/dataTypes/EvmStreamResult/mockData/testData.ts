// TODO: move to integration tests
export const initialWebhookResponse = {
  timestamp: '2022-10-12T08:21:25.677Z',
  data: {
    abis: {},
    block: {
      number: '',
      hash: '',
      timestamp: '',
    },
    txs: [],
    txsInternal: [],
    logs: [],
    chainId: '',
    confirmed: true,
    retries: 0,
    erc20Approvals: [],
    erc20Transfers: [],
    nftApprovals: {
      ERC721: [],
      ERC1155: [],
    },
    nftTransfers: [],
  },
};

export const nativeTxWebhookResponse = {
  timestamp: '2022-10-12T08:29:53.469Z',
  data: {
    confirmed: true,
    chainId: '0x5',
    abis: {},
    retries: 0,
    block: {
      number: '7755624',
      hash: '0xe8ea5287abf4284283cfd3ef9c1b3e9ed7b87d6e34e9d6a223fdac70cb2e3cc4',
      timestamp: '1665563388',
    },
    logs: [],
    txs: [
      {
        hash: '0x6076852ed3e7f7c4f5b45552966a7049026b425865ba9ae8ef7f8fc918ea4ba2',
        gas: '42000',
        gasPrice: '41730818',
        nonce: '102133',
        input: '0x',
        transactionIndex: '42',
        fromAddress: '0x3c352ea32dfbb757ccdf4b457e52daf6ecc21917',
        toAddress: '0x0ccedbd2f0fecc5fdaf9097e513f18c5da47fca2',
        value: '100000000000000000',
        type: '0',
        v: '45',
        r: '9001253475243653702017016519257145538419454360627742044622070949800375057415',
        s: '21207930346202371260508142926393852886912381606567500827202803519435539899509',
        receiptCumulativeGasUsed: '7724173',
        receiptGasUsed: '21000',
        receiptContractAddress: null,
        receiptRoot: null,
        receiptStatus: '1',
        tag: 'native-acc',
        streamId: 'fcbdf4e7-a9f1-41d6-bc6e-ecd630021315',
      },
    ],
    txsInternal: [],
    erc20Transfers: [],
    erc20Approvals: [],
    nftApprovals: {
      ERC1155: [],
      ERC721: [],
    },
    nftTransfers: [],
  },
};
