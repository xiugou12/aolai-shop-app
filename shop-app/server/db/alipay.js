const AlipaySdk = require('alipay-sdk').default;
const alipaySdk = new AlipaySdk({
  // appid
  appId: '2018120262397645',
  //签名算法
  signType:'RSA2',
  //支付宝网关
  gateway:'https://openapi.alipay.com/gateway.do',
  //支付宝公钥
  alipayPublicKey:'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAg/Za7pujS0bK5zMKML5e4oJmVkqNqPvAaqiODYggnNgziQiTNi4/U4xb/vy6p4ARp87GL1TyCz4KrbefYVq7/1mAFCPRf61b95O8udKVTPjPiYc264rWtxwXuDrwNYhcbmI0kJTDaMGriiNkRL4r/zIdSZRhq82fwsz+c4AaXnWwzd2Mc/G3n8oCMbnIrSOeDkXehTH0j0ej6LA7wrliNWjzuo1OoFIiUAbw2SS6TgPzJasBycRGb2gCEGLXmT7bAFM+TSQR+9yqklVz0gjW4omIBUlkfGy0NjuwvdJbknGkAWUYkdUPzzxIBl1whIPSCh4TZXnEpWHiKf0C8mf7gwIDAQAB',
  //应用私钥
  privateKey:'MIIEowIBAAKCAQEAmrS+ug8thP5ph/NWdHLTocdUKhE2HvqWdKvqYh5MMMkNHZbWnb2RKs0WLqo7zRdKesE3150su/GkC7bg58YcvYGr1FCqdUVNXc2DMNS6bbHUB/lWEydwDru7kMOGD4rR2d6s6CjgszMWcfxaGLf7HWl3m8bpTKsBqz9/QCe2vK4W5wzHlKk4r4GymL1kRRjEe7+0mvh6w1bFX1IaQynBej8a7BShRk0mjgVxlZLk7WUMm43Ba6w4EplDLGrU8oYrMWi7GFIHC4wZayP+cSV8PfSvktanVkZI9JIi05+c4IbuQ8ISy/GtGyTA4P7LgxYpZwB8a/Sx0wDhwgY+Zf4fBQIDAQABAoIBADWb6HOlCssJNhyMMCtOFxP6dKnXKP/3KefoIuI5SYGmScs1F821gPZp9wPYrbxWE9MR3X3z0yqVg5kjmC/4sMDijF6YTVkx2Ktmqc1kCe41LxpMRo2Anw4b89UoS+5a1nk+9n/Emoi+bUq2faoPJw98Gpx6gyG0KHHlIP1kRah/yIx0fEZqywG6wO+1hGUkUiQOQUgvq8hzOfxLL54GYWZBdD3KYRmzGJFgmhmoJjkae1Qs10nLpYGiQlx3Uj12cz1wXW3+oOjoFTcANq+Z1ciBvkKLuR3odhv4Lb7HF9X+X4LW+T+cCXTSwiezOkEE3dt0+2r828hd2tuqaHfnxckCgYEA25K471k2vHVJefS9MQm/jDOgokwkwtDje0CQAwR1a3pnc3IBKj+RBC7zuPJqdkpkkkOTcGil3EJUclp3cYbwq7x+oqCQuA4OTANS9Es4me0P0UkzQ26WguXthx604nOfA6LdIzC+p9NtANmi3D9D3zKbC3Q7bARQJRDRP8kES6cCgYEAtF8db11X0iQbBI5f+H6MKEsAsCn6P59Qp8FoeZK67PRVss2TguJYR2KYerm5CbuuS8fSgf7Gm99U4/PoRAGL4r8o9tOO6PTHHiZlo13xsW8tbrVhspG0SFFw5JWXnrSHiqmoq/yf+CBrT6LWWvANu0POwyUgYqyEG0B9VyT3JXMCgYB5Wo0lk9whqn0Sj0YlHSsllL8aFBVZKtQfIZ62XDd9UGhusLqeHAXNFxoSxMA8Yn9VK04ImX3ZzzsW/JL5RsgrUoF25mE1qGcUcd3eMNi2kgPk+pz/jtZWwDdYL4tvgNGI0/F+aolk/gBHsQFG0xxy9mgkm3fgCj41TicoJrReDwKBgQCEa3f+tHavDlbPh38pvi5DvpyouIjCgMIEBtgeuPyGzfLErGxpoKbS8a2kHAme/ay+cds4GMXS1alLGVwh4UjDlTgLzdGTcXFlzya7Q1MXwtmF95/cK2BB35iUGMcRetQvltMAQR1oWtStyIy6gpZyLxvy5KTcDG+IWlYqzjarxQKBgAMQhObSHbCGgqRtd5J4x00NvWN/RE6zDJ6s1x+yd6+i+YQVmASef9bszsOOqiXaeSvwUHkTTLq+zhHXNU7sj2+kcAAm3UF6J01g/RH53WwiTrZuG1CX7uPtmeDmp3K7dEml7HKEcSBaRoqmtpXihyIlYy2IhBTBc8x4DhUogf9z'
});

module.exports = alipaySdk;