import { AssetStandard, IxType, VoyageProvider } from "js-moi-sdk";

////////////////////////
// Writes / Interactions
///////////////////////

const CreateAsset = async (wallet, assetStandard, symbol, supply) => {
  // Create Payload
  // Send the Interaction
  // Wait for the Interaction receipt
};

const TransferAsset = async (wallet, receiver, assetId, amount) => {
  // Define Transfer Values
  // Send the Interaction
  // Wait for the interaction receipt
};

////////////////////////
// Reads
///////////////////////

const provider = new VoyageProvider("babylon");

const GetUsersAsset = async (address) => {
  return provider.getTDU(address);
};

const GetAssetInfo = async (asset_id) => {
  return provider.getAssetInfoByAssetID(asset_id);
};

const GetKmoiBalance = async (address) => {
  return provider.getBalance(
    address,
    "0x000000004cd973c4eb83cdb8870c0de209736270491b7acc99873da1eddced5826c3b548"
  );
};

const network = {
  CreateAsset,
  TransferAsset,
  GetAssetInfo,
  GetUsersAsset,
  GetKmoiBalance,
};

export default network;
