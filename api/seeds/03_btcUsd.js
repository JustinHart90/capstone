
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('btc_usd').del()
    .then(function () {
      // Inserts seed entries
      return knex('btc_usd').insert([
        {
          time: 1496966400,
          open: "2811.631",
          high: "2865.339",
          low: "2793.110",
          close: "2816.467",
          vwap: "2827.681",
          volume: "3812.55353931",
          count: 9267
        },
        {
          time: 1497052800,
          open: "2816.463",
          high: "2907.924",
          low: "2787.891",
          close: "2816.269",
          vwap: "2843.951",
          volume: "6116.96916550",
          count: 17705
        },
        {
          time: 1497139200,
          open: "2816.214",
          high: "2929.998",
          low: "2781.893",
          close: "2924.879",
          vwap: "2853.680",
          volume: "4738.19157980",
          count: 17089
        },
        {
          time: 1497225600,
          open: "2924.876",
          high: "2948.000",
          low: "2400.000",
          close: "2609.442",
          vwap: "2704.199",
          volume: "10270.90366937",
          count: 27774
        },
        {
          time: 1497312000,
          open: "2609.442",
          high: "2778.164",
          low: "2601.000",
          close: "2710.000",
          vwap: "2701.512",
          volume: "7200.41294360",
          count: 16675
        },
        {
          time: 1497398400,
          open: "2710.000",
          high: "2797.903",
          low: "2318.430",
          close: "2452.686",
          vwap: "2620.875",
          volume: "10307.68886160",
          count: 21986
        },
        {
          time: 1497484800,
          open: "2456.602",
          high: "2510.761",
          low: "2075.329",
          close: "2428.707",
          vwap: "2327.557",
          volume: "15725.06861977",
          count: 30444
        },
        {
          time: 1497571200,
          open: "2428.720",
          high: "2526.350",
          low: "2308.311",
          close: "2470.303",
          vwap: "2444.817",
          volume: "8199.12396206",
          count: 17818
        },
        {
          time: 1497657600,
          open: "2470.316",
          high: "2678.000",
          low: "2420.891",
          close: "2642.243",
          vwap: "2557.113",
          volume: "5840.43140512",
          count: 18407
        },
        {
          time: 1497744000,
          open: "2646.838",
          high: "2670.158",
          low: "2460.001",
          close: "2497.762",
          vwap: "2571.414",
          volume: "7006.94574528",
          count: 18170
        },
        {
          time: 1497830400,
          open: "2500.724",
          high: "2592.000",
          low: "2484.822",
          close: "2584.858",
          vwap: "2554.216",
          volume: "6459.40340697",
          count: 16614
        },
        {
          time: 1497916800,
          open: "2584.859",
          high: "2768.000",
          low: "2579.000",
          close: "2705.100",
          vwap: "2662.750",
          volume: "6133.32203630",
          count: 18026
        },
        {
          time: 1498003200,
          open: "2705.100",
          high: "2764.963",
          low: "2570.000",
          close: "2644.968",
          vwap: "2682.255",
          volume: "6443.29821865",
          count: 20903
        },
        {
          time: 1498089600,
          open: "2644.969",
          high: "2735.310",
          low: "2588.547",
          close: "2684.987",
          vwap: "2665.888",
          volume: "4830.25325455",
          count: 12561
        },
        {
          time: 1498176000,
          open: "2684.980",
          high: "2725.000",
          low: "2660.112",
          close: "2668.000",
          vwap: "2697.932",
          volume: "3467.61184512",
          count: 10324
        },
        {
          time: 1498262400,
          open: "2668.000",
          high: "2701.788",
          low: "2500.000",
          close: "2547.431",
          vwap: "2595.353",
          volume: "4388.75826031",
          count: 10500
        },
        {
          time: 1498348800,
          open: "2555.092",
          high: "2601.527",
          low: "2408.000",
          close: "2490.126",
          vwap: "2516.250",
          volume: "5293.36994113",
          count: 13880
        },
        {
          time: 1498435200,
          open: "2490.126",
          high: "2535.779",
          low: "2210.000",
          close: "2405.000",
          vwap: "2404.069",
          volume: "9803.02096367",
          count: 24840
        },
        {
          time: 1498521600,
          open: "2404.374",
          high: "2540.054",
          low: "2257.008",
          close: "2538.010",
          vwap: "2387.394",
          volume: "9163.27270786",
          count: 21182
        },
        {
          time: 1498608000,
          open: "2538.010",
          high: "2600.000",
          low: "2444.437",
          close: "2554.021",
          vwap: "2530.203",
          volume: "7936.55979987",
          count: 16888
        },
        {
          time: 1498694400,
          open: "2554.014",
          high: "2579.998",
          low: "2498.003",
          close: "2526.074",
          vwap: "2548.445",
          volume: "5462.74203280",
          count: 13329
        },
        {
          time: 1498780800,
          open: "2526.074",
          high: "2547.953",
          low: "2419.238",
          close: "2445.000",
          vwap: "2504.226",
          volume: "5522.98436402",
          count: 14840
        },
        {
          time: 1498867200,
          open: "2443.360",
          high: "2500.000",
          low: "2364.010",
          close: "2392.948",
          vwap: "2432.130",
          volume: "5291.33859134",
          count: 14855
        },
        {
          time: 1498953600,
          open: "2393.000",
          high: "2525.000",
          low: "2344.000",
          close: "2505.571",
          vwap: "2441.110",
          volume: "5874.65109879",
          count: 16519
        },
        {
          time: 1499040000,
          open: "2500.911",
          high: "2587.999",
          low: "2469.212",
          close: "2546.730",
          vwap: "2524.323",
          volume: "6427.10324836",
          count: 17605
        },
        {
          time: 1499126400,
          open: "2546.730",
          high: "2647.650",
          low: "2546.729",
          close: "2599.071",
          vwap: "2600.145",
          volume: "5916.61691710",
          count: 17503
        },
        {
          time: 1499212800,
          open: "2597.708",
          high: "2628.386",
          low: "2536.011",
          close: "2611.387",
          vwap: "2577.959",
          volume: "4964.38711779",
          count: 11960
        },
        {
          time: 1499299200,
          open: "2610.740",
          high: "2620.000",
          low: "2575.338",
          close: "2605.641",
          vwap: "2596.921",
          volume: "3528.72318966",
          count: 9277
        },
        {
          time: 1499385600,
          open: "2605.641",
          high: "2613.993",
          low: "2470.201",
          close: "2506.928",
          vwap: "2536.233",
          volume: "4956.84936433",
          count: 12181
        },
        {
          time: 1499472000,
          open: "2506.928",
          high: "2537.540",
          low: "2470.201",
          close: "2513.850",
          vwap: "2502.478",
          volume: "4178.32647769",
          count: 12149
        }
      ]);
    });
};
