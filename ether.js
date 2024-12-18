const provider = new ethers.JsonRpcProvider('https://scroll-sepolia.g.alchemy.com/v2/-Om5pWvbQTGynmGJHrCUkiXa-ES1ZVuW'); // Asegúrate de usar la URL correcta de tu nodo RPC
const contractAddress = '0x8388c1d78ec692cc4555f9367ff42f17084e79a3';
const contractABI =  [
    {
        "inputs": [
            { "internalType": "address", "name": "_tokenA", "type": "address" },
            { "internalType": "address", "name": "_tokenB", "type": "address" }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "provider", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "amountA", "type": "uint256" },
            { "indexed": false, "internalType": "uint256", "name": "amountB", "type": "uint256" }
        ],
        "name": "LiquidityAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "provider", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "amountA", "type": "uint256" },
            { "indexed": false, "internalType": "uint256", "name": "amountB", "type": "uint256" }
        ],
        "name": "LiquidityRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            { "indexed": true, "internalType": "address", "name": "swapper", "type": "address" },
            { "indexed": true, "internalType": "address", "name": "fromToken", "type": "address" },
            { "indexed": true, "internalType": "address", "name": "toToken", "type": "address" },
            { "indexed": false, "internalType": "uint256", "name": "inputAmount", "type": "uint256" },
            { "indexed": false, "internalType": "uint256", "name": "outputAmount", "type": "uint256" }
        ],
        "name": "TokensSwapped",
        "type": "event"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "amountA", "type": "uint256" },
            { "internalType": "uint256", "name": "amountB", "type": "uint256" }
        ],
        "name": "addLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "amountA", "type": "uint256" },
            { "internalType": "uint256", "name": "amountB", "type": "uint256" }
        ],
        "name": "removeLiquidity",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "amountAIn", "type": "uint256" }
        ],
        "name": "swapAforB",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            { "internalType": "uint256", "name": "amountBIn", "type": "uint256" }
        ],
        "name": "swapBforA",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPrice",
        "outputs": [
            { "internalType": "uint256", "name": "", "type": "uint256" }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
const contract = new ethers.Contract(contractAddress, contractABI, provider);

// Llamada a la función que deseas simular (reemplaza 'nombreDeLaFuncion' y sus parámetros)
try {
    const result = await contract.nombreDeLaFuncion(parametros);
    console.log(result);
} catch (error) {
    console.error('Error al llamar a la función:', error);
}

async function showGas() {
    try {
        const gasPrice = await provider.getGasPrice();
        const formattedGas = ethers.utils.formatUnits(gasPrice, 'gwei'); // Convertimos a Gwei
        gasAmount.textContent = `${formattedGas} Gwei`;
    } catch (error) {
        console.error('Error al obtener gas:', error);
        gasAmount.textContent = 'No disponible';
    }
}