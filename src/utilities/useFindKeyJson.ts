export const FindKeyJson = () => {

  interface AddressMap {
    [key: string]: string;
}

function findDomainByAddress(address: string, json: AddressMap): string | undefined {
    for (const key in json) {
        if (json.hasOwnProperty(key) && json[key] === address) {
            return json[key];
        }
    }
    return undefined;
}

const json: AddressMap = {
    'server': '192.168',
    'host': '1212'
};

const address = '192.168';
const domain = findDomainByAddress(address, json);

if (domain) {
    console.log(`The domain for address ${address} is ${domain}.`);
} else {
    console.log(`No domain found for address ${address}.`);
}
  return {
    findDomainByAddress
  }
}
