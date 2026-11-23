export type PropertyTag =
  "stem-diameter" | "height-crown" | "qsm-branches-biomass" | "leaf-wood" | "tree-stem-detection";

export type DataInput = "TLS" | "MLS" | "ULS" | "ALS" | "Photogrammetry";

export interface Method {
  id: string;
  name: string;
  authors: string;
  summary: string;
  repo: string; // full url
  homepage?: string;
  paper?: string;
  language: string;
  license: string;
  properties: PropertyTag[];
  inputs: DataInput[];
  year: number;
  featured?: boolean;
}

export const PROPERTY_LABELS: Record<PropertyTag, string> = {
  "stem-diameter": "Stem diameter",
  "height-crown": "Height & crown",
  "qsm-branches-biomass": "QSM / branches / biomass",
  "leaf-wood": "Leaf-wood classification",
  "tree-stem-detection": "Tree & stem detection",
};

export const METHODS: Method[] = [
  {
    id: "treeqsm",
    name: "TreeQSM",
    authors: "Raumonen et al.",
    summary:
      "Reconstruction of quantitative structure models of trees from point cloud data. The de-facto reference for cylinder-based QSMs.",
    repo: "https://github.com/InverseTampere/TreeQSM",
    paper: "https://doi.org/10.3390/rs5020491",
    language: "MATLAB",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass", "stem-diameter"],
    inputs: ["TLS", "MLS"],
    year: 2013,
    featured: true,
  },
  {
    id: "adtree",
    name: "AdTree",
    authors: "Du et al.",
    summary:
      "Accurate, detailed, and automatic modelling of laser-scanned trees producing skeleton + branch geometry.",
    repo: "https://github.com/tudelft3d/AdTree",
    paper: "https://doi.org/10.3390/rs11182074",
    language: "C++",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass"],
    inputs: ["TLS"],
    year: 2019,
    featured: true,
  },
  {
    id: "tls2trees",
    name: "TLS2Trees",
    authors: "Wilkes et al.",
    summary:
      "Scalable tree segmentation pipeline for forest-scale TLS point clouds. Includes semantic + instance segmentation.",
    repo: "https://github.com/philwilkes/TLS2trees",
    paper: "https://doi.org/10.1111/2041-210X.14233",
    language: "Python",
    license: "GPL-3.0",
    properties: ["tree-stem-detection", "leaf-wood"],
    inputs: ["TLS"],
    year: 2023,
    featured: true,
  },
  {
    id: "fsct",
    name: "FSCT",
    authors: "Krisanski et al.",
    summary:
      "Forest Structural Complexity Tool - deep-learning semantic segmentation and DBH/stem metrics from high-resolution point clouds.",
    repo: "https://github.com/SKrisanski/FSCT",
    paper: "https://doi.org/10.3390/rs13224677",
    language: "Python",
    license: "BSD-3-Clause",
    properties: ["stem-diameter", "height-crown", "tree-stem-detection", "leaf-wood"],
    inputs: ["TLS", "MLS"],
    year: 2021,
    featured: true,
  },
  {
    id: "3dfin",
    name: "3DFin",
    authors: "Laino et al.",
    summary:
      "Automatic dendrometry (DBH, stem position, height) from TLS/MLS with a friendly desktop GUI and CLI.",
    repo: "https://github.com/3DFin/3DFin",
    homepage: "https://pypi.org/project/3DFin/",
    paper: "https://doi.org/10.1016/j.envsoft.2024.106004",
    language: "Python",
    license: "GPL-3.0",
    properties: ["stem-diameter", "height-crown", "tree-stem-detection"],
    inputs: ["TLS", "MLS"],
    year: 2023,
  },
  {
    id: "simpleforest",
    name: "SimpleForest",
    authors: "Hackenberg et al.",
    summary:
      "QSM modelling plugin for Computree with segmentation and cylinder fitting for forest plots.",
    repo: "https://github.com/SimpleForest/pluginSimpleForest",
    homepage: "http://simpleforest.org",
    language: "C++",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass", "stem-diameter"],
    inputs: ["TLS"],
    year: 2015,
  },
  {
    id: "treeiso",
    name: "TreeIso",
    authors: "Xi & Hopkinson",
    summary:
      "Individual tree isolation from TLS point clouds using a bottom-up cut-pursuit segmentation.",
    repo: "https://github.com/truebelief/artemis_treeiso",
    paper: "https://doi.org/10.3390/rs14236116",
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection"],
    inputs: ["TLS"],
    year: 2022,
  },
  {
    id: "forestsemantic",
    name: "ForAINet",
    authors: "Xiang et al.",
    summary:
      "Deep learning framework for panoptic segmentation of forest point clouds into individual trees and semantic classes.",
    repo: "https://github.com/prs-eth/PanopticSegForLargeScalePointCloud",
    paper: "https://doi.org/10.1016/j.isprsjprs.2023.12.014",
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection", "leaf-wood"],
    inputs: ["TLS", "MLS", "ALS"],
    year: 2024,
  },
  {
    id: "lidr",
    name: "lidR",
    authors: "Roussel et al.",
    summary:
      "R package for airborne LiDAR data manipulation with individual tree detection, segmentation, and canopy metrics.",
    repo: "https://github.com/r-lidar/lidR",
    homepage: "https://r-lidar.github.io/lidRbook/",
    paper: "https://doi.org/10.1016/j.rse.2020.112061",
    language: "R",
    license: "GPL-3.0",
    properties: ["height-crown", "tree-stem-detection"],
    inputs: ["ALS", "ULS"],
    year: 2015,
    featured: true,
  },
  {
    id: "pytreedb",
    name: "pytreedb",
    authors: "Weiser et al.",
    summary:
      "Python library and DB for single-tree LiDAR point-cloud datasets, useful as input to structural methods.",
    repo: "https://github.com/3dgeo-heidelberg/pytreedb",
    paper: "https://doi.org/10.1016/j.softx.2022.101073",
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection"],
    inputs: ["TLS", "MLS", "ULS"],
    year: 2022,
  },
  {
    id: "raycloudtools",
    name: "raycloudtools",
    authors: "Lowe et al. (CSIRO)",
    summary:
      "Ray-based point cloud toolkit with tree extraction, trunk detection, and forest structural analysis.",
    repo: "https://github.com/csiro-robotics/raycloudtools",
    paper: "https://doi.org/10.1109/ACCESS.2021.3084954",
    language: "C++",
    license: "BSD-3-Clause",
    properties: ["tree-stem-detection", "qsm-branches-biomass", "stem-diameter"],
    inputs: ["MLS", "TLS"],
    year: 2021,
  },
  {
    id: "leafwoodsep",
    name: "LeWoS",
    authors: "Wang et al.",
    summary:
      "Leaf-wood classification of TLS point clouds using recursive segmentation - unsupervised, widely used baseline.",
    repo: "https://github.com/dwang520/LeWoS",
    paper: "https://doi.org/10.1111/2041-210X.13342",
    language: "MATLAB",
    license: "MIT",
    properties: ["leaf-wood"],
    inputs: ["TLS"],
    year: 2020,
  },
  {
    id: "treetool",
    name: "TreeTool",
    authors: "Montoya et al.",
    summary:
      "Fast automatic tree detection and DBH estimation tool for forest inventory from TLS point clouds.",
    repo: "https://github.com/porteratzo/TreeTool",
    paper: "https://doi.org/10.1016/j.softx.2021.100889",
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection", "stem-diameter"],
    inputs: ["TLS"],
    year: 2021,
  },
  {
    id: "point2tree",
    name: "point2tree",
    authors: "Wielgosz et al.",
    summary:
      "End-to-end pipeline for tree segmentation and structural parameter extraction from high-density LiDAR.",
    repo: "https://github.com/SmartForest-no/point2tree",
    paper: "https://doi.org/10.3390/rs15153737",
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection", "stem-diameter", "leaf-wood"],
    inputs: ["MLS", "TLS", "ULS"],
    year: 2023,
  },
  {
    id: "tlseparation",
    name: "TLSeparation",
    authors: "Vicari et al.",
    summary:
      "Python library to separate wood and leaf points in TLS scans, precursor to QSM building.",
    repo: "https://github.com/TLSeparation/source",
    paper: "https://doi.org/10.1111/2041-210X.13144",
    language: "Python",
    license: "GPL-3.0",
    properties: ["leaf-wood"],
    inputs: ["TLS"],
    year: 2019,
  },
  {
    id: "treels",
    name: "TreeLS",
    authors: "de Conto et al.",
    summary:
      "High-performance R functions for TLS point clouds: stem denoising, stem modelling, and tree taper.",
    repo: "https://github.com/tiagodc/TreeLS",
    paper: "https://doi.org/10.1016/j.compag.2017.10.019",
    language: "R",
    license: "GPL-3.0",
    properties: ["tree-stem-detection", "stem-diameter"],
    inputs: ["TLS"],
    year: 2017,
  },
  {
    id: "rtls",
    name: "rTLS",
    authors: "Guzmán et al.",
    summary:
      "Tools to voxelise TLS point clouds and derive forest-structure metrics: neighborhood features, filtering, optimal voxel size, entropy.",
    repo: "https://github.com/Antguz/rTLS",
    language: "R",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass"],
    inputs: ["TLS"],
    year: 2021,
  },
  {
    id: "rtwig",
    name: "rTwig",
    authors: "Morales & MacFarlane",
    summary:
      "Realistic QSM correction and analysis: fixes cylinder overlaps/gaps and adds twig-level detail to existing QSMs, plus box-dimension fractal analysis.",
    repo: "https://github.com/aidanmorales/rTwig",
    homepage: "https://aidanmorales.github.io/rTwig/",
    paper: "https://doi.org/10.1093/forestry/cpae046",
    language: "R",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass"],
    inputs: ["TLS"],
    year: 2024,
  },
  {
    id: "voxr",
    name: "VoxR",
    authors: "Lecigne et al.",
    summary:
      "Voxel-based 3D geometrical and morphological description of trees from unstructured TLS data: DBH, height, volume, crown diameter.",
    repo: "https://github.com/Blecigne/VoxR",
    paper: "https://doi.org/10.1093/aob/mcx095",
    language: "R",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass", "height-crown"],
    inputs: ["TLS"],
    year: 2018,
  },
  {
    id: "foresttools",
    name: "ForestTools",
    authors: "Plowright et al.",
    summary:
      "Individual tree detection and crown delineation from a canopy height model using variable-window filtering and marker-controlled watershed.",
    repo: "https://github.com/andrew-plowright/ForestTools",
    language: "R",
    license: "GPL-3.0",
    properties: ["height-crown", "tree-stem-detection"],
    inputs: ["ALS", "ULS"],
    year: 2017,
  },
  {
    id: "cloud2trees",
    name: "cloud2trees",
    authors: "Woolsey",
    summary:
      "Pipeline that extracts a full tree list, CHM, and DTM from aerial or SfM point clouds, with DBH and crown-biomass estimation via allometry.",
    repo: "https://github.com/georgewoolsey/cloud2trees",
    homepage: "https://georgewoolsey.github.io/cloud2trees/",
    language: "R",
    license: "GPL-3.0",
    properties: ["stem-diameter", "height-crown", "tree-stem-detection"],
    inputs: ["ALS", "ULS", "Photogrammetry"],
    year: 2024,
  },
  {
    id: "crownsegmentr",
    name: "crownsegmentr",
    authors: "Steinmeier et al.",
    summary:
      "R package with a C++-accelerated implementation of the AMS3D algorithm for 3D tree crown segmentation directly on airborne LiDAR points (no CHM raster required).",
    repo: "https://github.com/Lenostatos/crownsegmentr",
    language: "R",
    license: "GPL-3.0",
    properties: ["height-crown", "tree-stem-detection"],
    inputs: ["ALS"],
    year: 2025,
  },
  {
    id: "itsme",
    name: "ITSMe",
    authors: "Terryn et al.",
    summary:
      "Individual Tree Structural Metrics - derives DBH, height, volume and other structural indices from TLS point clouds and their TreeQSM models.",
    repo: "https://github.com/lmterryn/ITSMe",
    homepage: "https://lmterryn.github.io/ITSMe/",
    paper: "https://doi.org/10.1111/2041-210X.14026",
    language: "R",
    license: "MIT",
    properties: ["stem-diameter", "qsm-branches-biomass"],
    inputs: ["TLS", "MLS", "ULS"],
    year: 2023,
  },
  {
    id: "smartqsm",
    name: "SmartQSM",
    authors: "Yang et al.",
    summary:
      "Quantitative structure model using sparse-convolution-based point cloud contraction; extracts 82 multiscale architectural metrics per tree.",
    repo: "https://github.com/project-lightlin/SmartQSM",
    paper: "https://doi.org/10.1016/j.isprsjprs.2026.01.011",
    language: "Python",
    license: "AGPL-3.0",
    properties: ["qsm-branches-biomass", "stem-diameter"],
    inputs: ["TLS"],
    year: 2026,
  },
  {
    id: "pointstowood",
    name: "PointsToWood",
    authors: "Owen et al.",
    summary:
      "Deep learning leaf-wood semantic segmentation for high-resolution TLS point clouds using reflectance-modulated anisotropic convolutions.",
    repo: "https://github.com/harryjfowen/PointsToWood",
    paper: "https://arxiv.org/abs/2503.04420",
    language: "Python",
    license: "AGPL-3.0",
    properties: ["leaf-wood"],
    inputs: ["TLS"],
    year: 2025,
  },
  {
    id: "leafwood-dl",
    name: "Leaf-Wood Segmentation (qforestlab)",
    authors: "Van den Broeck et al.",
    summary:
      "Pointwise deep learning leaf-wood segmentation of tropical tree point clouds from terrestrial laser scanning, built on Open3D-ML.",
    repo: "https://github.com/qforestlab/leaf-wood-segmentation-with-deep-learning",
    paper: "https://doi.org/10.1016/j.isprsjprs.2025.06.023",
    language: "Python",
    license: "MIT",
    properties: ["leaf-wood"],
    inputs: ["TLS"],
    year: 2025,
  },
  {
    id: "treelearn",
    name: "TreeLearn",
    authors: "Henrich et al.",
    summary:
      "Fully-automatic deep-learning pipeline for individual tree instance segmentation from ground-based (TLS/MLS) forest point clouds.",
    repo: "https://github.com/ecker-lab/TreeLearn",
    paper: "https://doi.org/10.1016/j.ecoinf.2024.102888",
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection"],
    inputs: ["TLS", "MLS"],
    year: 2024,
  },
  {
    id: "pycrown",
    name: "PyCrown",
    authors: "Zörner et al.",
    summary:
      "Fast raster-based individual tree-top detection and crown delineation from a canopy height model, accelerated with Cython/Numba.",
    repo: "https://github.com/manaakiwhenua/pycrown",
    paper: "https://doi.org/10.3390/f9110702",
    language: "Python",
    license: "GPL-3.0",
    properties: ["height-crown", "tree-stem-detection"],
    inputs: ["ALS"],
    year: 2018,
  },
  {
    id: "treegraph",
    name: "treegraph",
    authors: "Yang et al.",
    summary:
      "Builds a graph/skeleton from TLS tree point clouds and segments individual branches to generate a QSM, retrieving traits at branch and internode level.",
    repo: "https://github.com/wanxinyang/treegraph",
    paper: "https://doi.org/10.1002/rse2.399",
    language: "Python",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass", "tree-stem-detection"],
    inputs: ["TLS"],
    year: 2024,
  },
  {
    id: "treeseg",
    name: "treeseg",
    authors: "Burt et al.",
    summary:
      "Near-automatic segmentation of individual tree point clouds from larger-area forest LiDAR scans, built on PCL: stem ID, segmentation up to first branch, crown isolation.",
    repo: "https://github.com/apburt/treeseg",
    paper: "https://doi.org/10.1111/2041-210X.13121",
    language: "C++",
    license: "MIT",
    properties: ["tree-stem-detection"],
    inputs: ["TLS"],
    year: 2019,
  },
  {
    id: "computree",
    name: "Computree",
    authors: "ONF / ENSAM Cluny",
    summary:
      "Long-running collaborative C++/Qt processing platform for forest-scene point clouds (TLS and airborne); the base platform underneath SimpleForest.",
    repo: "https://github.com/computree/computree-v3",
    homepage: "https://computree.onf.fr",
    language: "C++",
    license: "GPL-3.0",
    properties: ["tree-stem-detection", "qsm-branches-biomass", "stem-diameter"],
    inputs: ["TLS", "ALS"],
    year: 2010,
  },
  {
    id: "optqsm",
    name: "optqsm",
    authors: "Burt",
    summary:
      "Wraps TreeQSM to fully automate QSM construction by analyzing point-neighbor distances to auto-select input parameters per tree.",
    repo: "https://github.com/apburt/optqsm",
    language: "MATLAB",
    license: "MIT",
    properties: ["qsm-branches-biomass"],
    inputs: ["TLS"],
    year: 2020,
  },
  {
    id: "dft",
    name: "Digital Forestry Toolbox",
    authors: "Parkan",
    summary:
      "Matlab/Octave toolbox for airborne forestry remote sensing: DTM/DSM/CHM generation, watershed-based individual tree crown detection, canopy metrics.",
    repo: "https://github.com/mparkan/Digital-Forestry-Toolbox",
    homepage: "https://mparkan.github.io/Digital-Forestry-Toolbox/",
    paper: "https://doi.org/10.5281/zenodo.1213013",
    language: "MATLAB",
    license: "GPL-3.0",
    properties: ["height-crown", "tree-stem-detection"],
    inputs: ["ALS"],
    year: 2018,
  },
  {
    id: "pointcloudtools",
    name: "Point-Cloud-Tools",
    authors: "Yrttimaa et al.",
    summary:
      "Automatic MATLAB tools to characterize trees from TLS point clouds: crown detection, stem/crown classification, stem metrics and dendrometry.",
    repo: "https://github.com/tuomasyr/Point-Cloud-Tools",
    paper: "https://doi.org/10.3390/rs11121423",
    language: "MATLAB",
    license: "CC-BY-4.0",
    properties: ["stem-diameter", "height-crown", "qsm-branches-biomass"],
    inputs: ["TLS"],
    year: 2019,
  },
  // ---- AUTO-DRAFTED by scripts/scan-new-methods.mjs (scan: 2026-11-16) ----
  // These are live catalog entries: merging the PR publishes every entry left here.
  // Check each field against the repo and paper, fix anything marked TODO, and delete
  // entries that don't belong (add their repo to scripts/ignored-repos.txt so they're
  // never suggested again). The comments are harmless if left in.
  {
    id: "forpt",
    name: "ForPT",
    authors: "Yue et al.", // from paper metadata
    summary: "[ArXiv 2026] Toward A Foundation Model for Forest Point Clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/prs-eth/ForPT",
    homepage: "https://prs-eth.github.io/ForPT/",
    paper: "https://arxiv.org/abs/2609.24787", // resolves (paper abstract links to this repo): "Toward a foundation model for forest point clouds"
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["MLS", "ULS", "ALS"], // TODO verify: inferred from keywords
    year: 2026, // paper year
  },
  {
    id: "pyfor",
    name: "pyfor",
    authors: "Bryce Frank", // TODO verify: GitHub owner name, no paper found
    summary: "Tools for analyzing aerial point clouds of forest data.", // TODO rewrite: copied from repo description
    repo: "https://github.com/brycefrank/pyfor",
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2016, // TODO verify: repo creation year
  },
  {
    id: "3d-forest",
    name: "3d-forest",
    authors: "Landscape Research Institute - Department of Forest Ecology", // TODO verify: GitHub organization name, no paper found
    summary:
      "Visualization, processing and analysis of Lidar point clouds, mainly focused on forest environment. New version of 3D Forest. Process files with terabytes of data. Edit new point attributes. Simple addition of new…", // TODO rewrite: copied from repo description
    repo: "https://github.com/VUKOZ-OEL/3d-forest",
    homepage: "https://3dforest.eu",
    language: "C++",
    license: "GPL-3.0",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2020, // TODO verify: repo creation year
  },
  {
    id: "pyforestscan",
    name: "PyForestScan",
    authors: "Iosefa Percival", // TODO verify: GitHub owner name, no paper found
    summary:
      "A python package for calculating forest structural metrics from airborne point clouds.", // TODO rewrite: copied from repo description
    repo: "https://github.com/iosefa/PyForestScan",
    homepage: "https://pyforestscan.sefa.ai/",
    language: "Python",
    license: "MIT",
    properties: [], // TODO verify: inferred from keywords
    inputs: ["ALS"], // TODO verify: inferred from keywords
    year: 2023, // TODO verify: repo creation year
  },
  {
    id: "arbor",
    name: "arbor",
    authors: "r-lidar", // TODO verify: GitHub organization name, no paper found
    summary: "3D Forest modelisation in MLS point cloud", // TODO rewrite: copied from repo description
    repo: "https://github.com/r-lidar/arbor",
    homepage: "https://r-lidar.github.io/arbor_book/",
    language: "C++",
    license: "GPL-3.0",
    properties: ["qsm-branches-biomass", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["MLS"], // TODO verify: inferred from keywords
    year: 2025, // TODO verify: repo creation year
  },
  {
    id: "pointtree",
    name: "pointtree",
    authors: "Burmeister et al.", // TODO verify: from a paper that may not be this method's
    summary: "A Python Package for Tree Instance Segmentation in 3D Point Clouds.", // TODO rewrite: copied from repo description
    repo: "https://github.com/ai4trees/pointtree",
    paper: "https://arxiv.org/abs/2509.03633", // TODO verify, may be the wrong paper (first on-topic paper cited in README): "treeX: Unsupervised Tree Instance Segmentation in Dense Forest Point Clouds"
    language: "Python",
    license: "MIT",
    properties: ["stem-diameter", "height-crown", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS", "MLS", "ULS"], // TODO verify: inferred from keywords
    year: 2025, // TODO verify: paper year
  },
  {
    id: "segfix",
    name: "Segfix",
    authors: "UQ-EORC", // TODO verify: GitHub organization name, no paper found
    summary: "A GUI tool to fix the instance segmentation of tree point clouds.", // TODO rewrite: copied from repo description
    repo: "https://github.com/UQ-EORC/Segfix",
    language: "Python",
    license: "GPL-3.0",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "cspstandsegmentation",
    name: "CspStandSegmentation",
    authors: "Larysch et al.", // TODO verify: from a paper that may not be this method's
    summary: "R package for single tree delination from TLS/MLS/ULS point clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/JulFrey/CspStandSegmentation",
    paper: "https://doi.org/10.1007/s10342-025-01796-z", // TODO verify, may be the wrong paper (first on-topic paper cited in README): "Quantifying and mapping the ready-to-use veneer volume of European beech trees…"
    language: "R",
    license: "GPL-3.0",
    properties: ["stem-diameter", "height-crown", "qsm-branches-biomass"], // TODO verify: inferred from keywords
    inputs: ["TLS", "MLS", "ULS"], // TODO verify: inferred from keywords
    year: 2025, // TODO verify: paper year
  },
  {
    id: "cc-treeiso-plugin",
    name: "cc-treeiso-plugin",
    authors: "Xi et al.", // from paper metadata
    summary: "Individual-tree isolation (treeiso) from terrestrial laser scanning", // TODO rewrite: copied from repo description
    repo: "https://github.com/truebelief/cc-treeiso-plugin",
    paper: "https://doi.org/10.3390/rs14236116", // resolves (cited in README, title names the repo): "3D Graph-Based Individual-Tree Isolation (Treeiso) from Terrestrial Laser…"
    language: "C++",
    license: "GPL-3.0",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2022, // paper year
  },
  {
    id: "selectanytree",
    name: "SelectAnyTree",
    authors: "Nguyen et al.", // from paper metadata
    summary: "A Promptable Instance Segmentation Model for 3D Forest LiDAR Point Clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/thanhhff/SelectAnyTree",
    homepage: "https://thanhhff.github.io/SelectAnyTree/",
    paper: "https://arxiv.org/abs/2606.27491", // resolves (cited in README, title names the repo): "SelectAnyTree: A Promptable Instance Segmentation Model for 3D Forest LiDAR…"
    language: "Unknown",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["height-crown", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // paper year
  },
  {
    id: "treex",
    name: "treeX",
    authors: "Tockner et al.", // TODO verify: from a paper that may not be this method's
    summary:
      "Package for individual tree detection and tree segmentation from ground-based LiDAR data", // TODO rewrite: copied from repo description
    repo: "https://github.com/anditockner/treeX",
    paper: "https://doi.org/10.1016/j.jag.2022.103025", // TODO verify, may be the wrong paper (first on-topic paper cited in README): "Automatic tree crown segmentation using dense forest point clouds from Personal…"
    language: "R",
    license: "GPL-3.0",
    properties: ["height-crown", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2022, // TODO verify: paper year
  },
  {
    id: "treelite3d",
    name: "TreeLite3D",
    authors: "Rizaldy et al.", // TODO verify: from a paper that may not be this method's
    summary: "3D tree segmentation and classification with minimal labels from LiDAR point clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/aldinorizaldy/TreeLite3D",
    paper: "https://doi.org/10.1016/j.rse.2026.115564", // TODO verify, may be the wrong paper (first on-topic paper cited in README): "Label-efficient 3D forest mapping: Self-supervised and transfer learning for…"
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: paper year
  },
  {
    id: "wdts",
    name: "WDTS",
    authors: "Pu et al.", // TODO verify: from a paper that may not be this method's
    summary:
      "WDTS: Water Droplet Model-Driven Entropy Optimization for Individual Tree Skeletonization from Terrestrial Laser Scanning Point Clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/Putaonjfu/WDTS",
    paper: "https://doi.org/10.1016/j.isprsjprs.2026.04.050", // TODO verify, may be the wrong paper (recent paper whose title names the repo): "WDTS: Water droplet model-driven entropy optimization for individual tree…"
    language: "Python",
    license: "MIT",
    properties: ["qsm-branches-biomass", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: paper year
  },
  {
    id: "forestquery",
    name: "ForestQuery",
    authors: "Zhan et al.", // from paper metadata
    summary:
      "ForestQuery: Boundary-Aware and Spatially Anchored Query Learning for Unified Forest Point Cloud Segmentation", // TODO rewrite: copied from repo description
    repo: "https://github.com/zhan994/ForestQuery",
    paper: "https://arxiv.org/abs/2610.03403", // resolves (cited in README, title names the repo): "ForestQuery: Boundary-Aware and Spatially Anchored Query Learning for Unified…"
    language: "Unknown",
    license: "Apache-2.0",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // paper year
  },
  {
    id: "forest3d",
    name: "forest3d",
    authors: "David Diaz", // TODO verify: GitHub owner name, no paper found
    summary:
      "3D visualization of forest inventory plots and probabilistic approach to co-registering a stem map with lidar data", // TODO rewrite: copied from repo description
    repo: "https://github.com/d-diaz/forest3d",
    language: "HTML",
    license: "BSD-3-Clause",
    properties: ["stem-diameter", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2018, // TODO verify: repo creation year
  },
  {
    id: "canopy-synth-2d3d",
    name: "canopy-synth-2d3d",
    authors: "LukSlow", // TODO verify: GitHub owner name, no paper found
    summary:
      "A showcase of a procedural Blender + TreeIt pipeline generating synthetic 2D renders and 3D point clouds of trees, with automatic segmentation labels (both semantic and instance) for forestry and urban canopy modeling.", // TODO rewrite: copied from repo description
    repo: "https://github.com/slowiklukasz/canopy-synth-2d3d",
    language: "Unknown",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["height-crown", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "tlnet",
    name: "TLNet",
    authors: "Tan et al.", // from paper metadata
    summary:
      "TLNet: a deep learning framework for tree detection in forest point clouds using multi-layered forest structure", // TODO rewrite: copied from repo description
    repo: "https://github.com/yiliutan/TLNet",
    homepage: "https://doi.org/10.1016/j.isprsjprs.2026.02.002",
    paper: "https://doi.org/10.1016/j.isprsjprs.2026.02.002", // resolves (cited in README, title names the repo): "TLNet: A deep learning framework for tree detection in forest point clouds…"
    language: "Python",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // paper year
  },
  {
    id: "forest-lidar-instance-segmentation-showcase",
    name: "forest-lidar-instance-segmentation-showcase",
    authors: "LukSlow", // TODO verify: GitHub owner name, no paper found
    summary:
      "Portfolio showcase: transformer-based semantic + instance segmentation of individual trees from synthetic 3D LiDAR point clouds. Custom DETR/Mask3D-style decoder, geometry-aware attention, forest-specific augmentations.", // TODO rewrite: copied from repo description
    repo: "https://github.com/slowiklukasz/forest-lidar-instance-segmentation-showcase",
    language: "Unknown",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "canopy-filter",
    name: "canopy-filter",
    authors: "UQ-EORC", // TODO verify: GitHub organization name, no paper found
    summary:
      "Headless 3D SegFormer point classifier for understory/canopy and wood/leaf separation in forest point clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/UQ-EORC/canopy-filter",
    language: "Python",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["height-crown", "leaf-wood"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "leafwood-segmentation",
    name: "LeafWood_Segmentation",
    authors: "Kaharlytskyi et al.", // TODO verify: from a paper that may not be this method's
    summary: "Leaf wood pointcloud separation algorithm.", // TODO rewrite: copied from repo description
    repo: "https://github.com/heejumun/LeafWood_Segmentation",
    paper: "https://arxiv.org/abs/2609.21903", // TODO verify, may be the wrong paper (recent paper whose title names the repo): "The Role of Radiometric Features in Cross-Site Leaf-Wood Segmentation of LiDAR…"
    language: "Python",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["stem-diameter", "qsm-branches-biomass", "leaf-wood", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: paper year
  },
  // ---- END AUTO-DRAFTED ----
  // ---- AUTO-DRAFTED by scripts/scan-new-methods.mjs (scan: 2026-11-23) ----
  // These are live catalog entries: merging the PR publishes every entry left here.
  // Check each field against the repo and paper, fix anything marked TODO, and delete
  // entries that don't belong (add their repo to scripts/ignored-repos.txt so they're
  // never suggested again). The comments are harmless if left in.
  {
    id: "pointcloudlabeler",
    name: "pointcloudlabeler",
    authors: "Eppu Honkanen", // TODO verify: GitHub owner name, no paper found
    summary: "Tree segmentation and forest inventory from terrestrial and mobile laser scans", // TODO rewrite: copied from repo description
    repo: "https://github.com/honkaepp/pointcloudlabeler",
    language: "Rust",
    license: "GPL-3.0",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS", "MLS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "fusion2",
    name: "FUSION2",
    authors: "Jacob Strunk", // TODO verify: GitHub owner name, no paper found
    summary:
      "Suite of command line point cloud processing tools developed to support forest inventory and monitoring applications. Derived from the FUSION software suite developed by Bob McGaughey (USDA Forest Service / PNW Research…", // TODO rewrite: copied from repo description
    repo: "https://github.com/jstrunk001/FUSION2",
    language: "C++",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "toptreesegr",
    name: "TopTreeSegR",
    authors: "Gergő Diószegi", // TODO verify: GitHub owner name, no paper found
    summary:
      "Morse-Smale + Bayesian refinement for high-accuracy, ultra-fast individual tree segmentation on meshes  from LiDAR point clouds ⚡", // TODO rewrite: copied from repo description
    repo: "https://github.com/DijoG/TopTreeSegR",
    language: "C++",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2025, // TODO verify: repo creation year
  },
  {
    id: "lewos-py",
    name: "LeWoS-py",
    authors: "Wang et al.", // from paper metadata
    summary:
      "Python implementation of LeWoS: unsupervised leaf-wood classification from TLS point clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/dwang520/LeWoS-py",
    paper: "https://doi.org/10.1111/2041-210x.13342", // resolves (cited in README, title names the repo): "LeWoS: A universal leaf‐wood classification method to facilitate the 3D…"
    language: "Python",
    license: "MIT",
    properties: ["qsm-branches-biomass", "leaf-wood", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2020, // paper year
  },
  {
    id: "fgi-emit",
    name: "fgi_emit",
    authors: "Ruoppa et al.", // from paper metadata
    summary:
      'Official repository of the ISPRS Journal of Photogrammetry and Remote Sensing paper: "Benchmarking individual tree segmentation using multispectral airborne laser scanning data: The FGI-EMIT dataset"', // TODO rewrite: copied from repo description
    repo: "https://github.com/ruoppa/fgi_emit",
    paper: "https://doi.org/10.1016/j.isprsjprs.2026.04.021", // resolves (cited in README, title names the repo): "Benchmarking individual tree segmentation using multispectral airborne laser…"
    language: "Python",
    license: "MIT",
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["ALS", "Photogrammetry"], // TODO verify: inferred from keywords
    year: 2026, // paper year
  },
  {
    id: "sylvanav",
    name: "sylvanav",
    authors: "Ekko82", // TODO verify: GitHub owner name, no paper found
    summary:
      "Forest drone simulation in Blender and Python, with camera views and geometric point clouds.", // TODO rewrite: copied from repo description
    repo: "https://github.com/Ekko82/sylvanav",
    language: "Python",
    license: "MIT",
    properties: [], // TODO verify: inferred from keywords
    inputs: ["ULS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "abgbiomass-carbon-stock-estimation-dashboard",
    name: "ABGbiomass_Carbon_Stock_Estimation_Dashboard",
    authors: "Hachani Zeineb", // TODO verify: GitHub owner name, no paper found
    summary:
      "Interactive Streamlit dashboard for estimating above-ground biomass in the Veluwe, Netherlands, using MLP, XGBoost and CatBoost on spectral data, satellite embeddings and LiDAR-derived tree structure.", // TODO rewrite: copied from repo description
    repo: "https://github.com/Zeineb19/ABGbiomass_Carbon_Stock_Estimation_Dashboard",
    language: "Python",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["qsm-branches-biomass"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "lidar-olive-tree-segmentation-matlab",
    name: "LIDAR-olive-tree-segmentation-MATLAB",
    authors: "Patricio Hernandez", // TODO verify: GitHub owner name, no paper found
    summary:
      "MATLAB script for segmenting olive trees and extracting geometric parameters (volume, area) from LIDAR point clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/patitostyle/LIDAR-olive-tree-segmentation-MATLAB",
    language: "MATLAB",
    license: "MIT",
    properties: ["qsm-branches-biomass", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "treeq",
    name: "treeq",
    authors: "Remote55", // TODO verify: GitHub owner name, no paper found
    summary:
      "🌲 Tree biomass and carbon from terrestrial LiDAR — wood/leaf separation, QSM geometry, Chave 2014 allometry. Scored against 126 destructively harvested trees, 65 temperate and 61 tropical. Every published figure…", // TODO rewrite: copied from repo description
    repo: "https://github.com/Remote55/treeq",
    homepage: "https://treeqcarbon.vercel.app",
    language: "Python",
    license: "MIT",
    properties: ["qsm-branches-biomass", "leaf-wood", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "proyek-lidar",
    name: "proyek-lidar",
    authors: "Yahya Latif Hidayat", // TODO verify: GitHub owner name, no paper found
    summary:
      "LiDAR tree inventory pipeline in R (lidR, sf) and PostGIS: point cloud QC, DTM, CHM, individual tree detection, and per-plot statistics with SQL.", // TODO rewrite: copied from repo description
    repo: "https://github.com/hida222/proyek-lidar",
    language: "R",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["height-crown", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "samstars",
    name: "samstars",
    authors: "Iosefa Percival", // TODO verify: GitHub owner name, no paper found
    summary:
      "A Python library for individual tree crown segmentation from imagery and lidar-derived rasters, using automatic prompts and limited training annotations.", // TODO rewrite: copied from repo description
    repo: "https://github.com/iosefa/samstars",
    homepage: "https://samstars.sefa.ai/",
    language: "Python",
    license: "MIT",
    properties: ["height-crown", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2025, // TODO verify: repo creation year
  },
  {
    id: "occlusion-robust-tls-stem-detection",
    name: "occlusion-robust-tls-stem-detection",
    authors: "Shahab Alaedin Baloochi", // TODO verify: GitHub owner name, no paper found
    summary:
      "Occlusion-robust stem detection from individual-tree terrestrial laser scanning (TLS) point clouds using graph-based deep learning and geometric post-processing.", // TODO rewrite: copied from repo description
    repo: "https://github.com/shahab199271/occlusion-robust-tls-stem-detection",
    language: "Python",
    license: "MIT",
    properties: ["stem-diameter", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "forest-ground-filter",
    name: "forest-ground-filter",
    authors: "Ayushi Sharma", // TODO verify: GitHub owner name, no paper found
    summary:
      "Label-free ground removal for forest point clouds: self-seeded CANUPO with a shape-rule fallback", // TODO rewrite: copied from repo description
    repo: "https://github.com/ayushi-3536/forest-ground-filter",
    language: "Python",
    license: "Apache-2.0",
    properties: [], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "open-lidar-forest-structure",
    name: "open-lidar-forest-structure",
    authors: "Swastikaa", // TODO verify: GitHub owner name, no paper found
    summary:
      "Open-source extraction of forest structure and biomass indicators from LiDAR point clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/SwastikaS/open-lidar-forest-structure",
    language: "R",
    license: "MIT",
    properties: ["qsm-branches-biomass"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "treetimealign",
    name: "TreeTimeAlign",
    authors: "Dai et al.", // TODO verify: from a paper that may not be this method's
    summary: "A stem-based workflow for intertemporal alignment of TLS forest point clouds", // TODO rewrite: copied from repo description
    repo: "https://github.com/AaronShepp/TreeTimeAlign",
    paper: "https://doi.org/10.1080/17538947.2020.1764118", // TODO verify, may be the wrong paper (first on-topic paper cited in README): "Fast registration of forest terrestrial laser scans using key points detected…"
    language: "R",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["stem-diameter", "height-crown"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2020, // TODO verify: paper year
  },
  {
    id: "treesurvey",
    name: "treesurvey",
    authors: "SUzsuar", // TODO verify: GitHub owner name, no paper found
    summary:
      "Web-native HKUST tree survey platform for point clouds, TreeX instances, QSM models, and 3D Gaussian Splatting forest twins.", // TODO rewrite: copied from repo description
    repo: "https://github.com/suzeln/treesurvey",
    homepage: "https://suzeln.github.io/treesurvey/",
    language: "HTML",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["qsm-branches-biomass"], // TODO verify: inferred from keywords
    inputs: [], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "pic",
    name: "PiC",
    authors: "Ferrara et al.", // TODO verify: from a paper that may not be this method's
    summary: "R package for TLS/MLS forest point-cloud segmentation and analysis", // TODO rewrite: copied from repo description
    repo: "https://github.com/rupppy/PiC",
    homepage: "https://rupppy.github.io/PiC/",
    paper: "https://doi.org/10.1016/j.agrformet.2018.04.008", // TODO verify, may be the wrong paper (first on-topic paper cited in README): "An automated approach for wood-leaf separation from terrestrial LIDAR point…"
    language: "R",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["leaf-wood", "tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS", "MLS"], // TODO verify: inferred from keywords
    year: 2018, // TODO verify: paper year
  },
  {
    id: "tls-tree-segmentation",
    name: "tls-tree-segmentation",
    authors: "Trường Thịnh", // TODO verify: GitHub owner name, no paper found
    summary: "Individual-tree segmentation from TLS point clouds (INFO6003)", // TODO rewrite: copied from repo description
    repo: "https://github.com/Thinhrichkidz/tls-tree-segmentation",
    language: "Python",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["TLS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "hedgerow-segmentation",
    name: "hedgerow-segmentation",
    authors: "Aymen_BOUZAZI", // TODO verify: GitHub owner name, no paper found
    summary: "Tree-level segmentation of LiDAR point clouds in a hedgerow (ALS + UAV, Python)", // TODO rewrite: copied from repo description
    repo: "https://github.com/aymen-bouzazi/hedgerow-segmentation",
    language: "Python",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["ULS", "ALS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  {
    id: "diversa-mls-preprocessing",
    name: "diversa_mls_preprocessing",
    authors: "Jens Wiesehahn", // TODO verify: GitHub owner name, no paper found
    summary:
      "MLS point cloud preprocessing for DIVERSA forest plots: cleaning, ALS alignment and tree segmentation in R.", // TODO rewrite: copied from repo description
    repo: "https://github.com/wiesehahn/diversa_mls_preprocessing",
    language: "R",
    license: "Unknown", // TODO verify: check LICENSE file in repo
    properties: ["tree-stem-detection"], // TODO verify: inferred from keywords
    inputs: ["MLS", "ALS"], // TODO verify: inferred from keywords
    year: 2026, // TODO verify: repo creation year
  },
  // ---- END AUTO-DRAFTED ----
];
