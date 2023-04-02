/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ZeroHero, ZeroHeroInterface } from "../../contracts/ZeroHero";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newAge",
        type: "uint256",
      },
    ],
    name: "ValueChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_initAge",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "readAge",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readAll",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newAge",
        type: "uint256",
      },
    ],
    name: "setAge",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newWeight",
        type: "uint256",
      },
    ],
    name: "setWeight",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610336806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c806341f654f71461005c5780634aac8ef714610079578063d5dcf1271461008f578063fc1711f2146100a4578063fe4b84df146100b7575b600080fd5b606060008060405161007093929190610264565b60405180910390f35b6100816100ca565b604051908152602001610070565b6100a261009d3660046102c0565b6100e0565b005b6100a26100b23660046102c0565b61011c565b6100a26100c53660046102c0565b610151565b600060015460016100db91906102d9565b905090565b60018190556040518181527f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c59906020015b60405180910390a150565b60028190556040518181527f93fe6d397c74fdf1402a8b72e47b68512f0510d7b98a4bc4cbdf6ac7108b3c5990602001610111565b600054610100900460ff16158080156101715750600054600160ff909116105b8061018b5750303b15801561018b575060005460ff166001145b6101f25760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840160405180910390fd5b6000805460ff191660011790558015610215576000805461ff0019166101001790555b60018290558015610260576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b606081526000845180606084015260005b818110156102925760208188018101516080868401015201610275565b506000608082850101526080601f19601f830116840101915050836020830152826040830152949350505050565b6000602082840312156102d257600080fd5b5035919050565b808201808211156102fa57634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220933eaa2df6e37ecec5baf21385847f98352bc5909cd025cebc90216a9215dbcd64736f6c63430008130033";

type ZeroHeroConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ZeroHeroConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ZeroHero__factory extends ContractFactory {
  constructor(...args: ZeroHeroConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ZeroHero> {
    return super.deploy(overrides || {}) as Promise<ZeroHero>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ZeroHero {
    return super.attach(address) as ZeroHero;
  }
  override connect(signer: Signer): ZeroHero__factory {
    return super.connect(signer) as ZeroHero__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ZeroHeroInterface {
    return new utils.Interface(_abi) as ZeroHeroInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZeroHero {
    return new Contract(address, _abi, signerOrProvider) as ZeroHero;
  }
}