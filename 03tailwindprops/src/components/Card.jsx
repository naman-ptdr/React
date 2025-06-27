import React from "react";

function Card(props) {
  console.log("props", props);
  
  return (
    <div className="w-64 bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      <img
        src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
        alt="Bored Ape NFT"
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {props.username}
          </h2>
          <span className="text-sm text-gray-600 dark:text-gray-300">0.01 ETH</span>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Accidental Bored Ape NFT drop. Rare and unique!
        </div>
      </div>
    </div>
  );
}

export default Card;
