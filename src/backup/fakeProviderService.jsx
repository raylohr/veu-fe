/** @format */

// providerService.jsx

/** @format */

const providers = [
  {
    _id: '001',
    name: 'naam001',
    city: 'city001',
    address: 'address001',
    telno: '070-2345789',
  },
  {
    _id: '002',
    name: 'naam002',
    city: 'city002',
    address: 'address002',
    telno: '010-3265147',
  },
  {
    _id: '003',
    name: 'naam003',
    city: 'city003',
    address: 'address003',
    telno: '030-23567841',
  },
  {
    _id: '004',
    name: 'naam004',
    city: 'city004',
    address: 'address004',
    telno: '070-1236598',
  },
];

export function getProviders() {
  console.log(providers);
  return providers;
}

export function getProvider(id) {
  const provider = providers.find((provider) => provider._id === id);
  console.log(provider);
  return provider;
}
