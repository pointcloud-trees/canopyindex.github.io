# New method candidates (scan: 2026-11-16)

Scan window: repos created or pushed, and papers published, since **2026-07-19**.
Sources: GitHub search, arXiv, Crossref. Each candidate is reported once
(tracked in `scripts/scan-state.json`); repos in `scripts/ignored-repos.txt` are skipped.

**Everything here is unverified.** The draft entries in `src/lib/methods.ts` are a
starting point, not catalog data. Before merging:
- Confirm the repo is real, maintained, and matches the stated description.
- Check the license in the repo itself (search-result metadata can be wrong or missing).
- Paper links were only filled from DOIs/arXiv ids that resolved and look on-topic. Ones
  marked unsure / TODO may be a related paper rather than this method's. Never guess a DOI.
- Verify author names against the paper or package metadata — never invent one.
- Delete drafts that don't belong and add their repo to `scripts/ignored-repos.txt`.

## Drafted into methods.ts (20)

### [prs-eth/ForPT](https://github.com/prs-eth/ForPT)

- **Stars:** 18 · **Language:** Python · **License:** MIT · **Created:** 2026-10-09 · **Last push:** 2026-10-12
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed); arXiv: Toward a foundation model for forest point clouds
- **Paper:** [Toward a foundation model for forest point clouds](https://arxiv.org/abs/2609.24787) (arXiv, 2026; paper abstract links to this repo)
- **Description:** [ArXiv 2026] Toward A Foundation Model for Forest Point Clouds

### [brycefrank/pyfor](https://github.com/brycefrank/pyfor)

- **Stars:** 99 · **Language:** Python · **License:** MIT · **Created:** 2016-12-07 · **Last push:** 2026-11-14
- **Found via:** GitHub "forest point cloud" (pushed)
- **Description:** Tools for analyzing aerial point clouds of forest data.

### [VUKOZ-OEL/3d-forest](https://github.com/VUKOZ-OEL/3d-forest)

- **Stars:** 98 · **Language:** C++ · **License:** GPL-3.0 · **Created:** 2020-06-05 · **Last push:** 2026-10-31
- **Found via:** GitHub "point cloud tree segmentation" (pushed); GitHub "forest point cloud" (pushed)
- **Description:** Visualization, processing and analysis of Lidar point clouds, mainly focused on forest environment. New version of 3D Forest. Process files with terabytes of data. Edit new point attributes. Simple addition of new features by plugins.

### [iosefa/PyForestScan](https://github.com/iosefa/PyForestScan)

- **Stars:** 89 · **Language:** Python · **License:** MIT · **Created:** 2023-07-22 · **Last push:** 2026-11-15
- **Found via:** GitHub "forest point cloud" (pushed)
- **Description:** A python package for calculating forest structural metrics from airborne point clouds.

### [r-lidar/arbor](https://github.com/r-lidar/arbor)

- **Stars:** 65 · **Language:** C++ · **License:** GPL-3.0 · **Created:** 2025-06-12 · **Last push:** 2026-11-11
- **Found via:** GitHub "forest point cloud" (pushed)
- **Description:** 3D Forest modelisation in MLS point cloud

### [ai4trees/pointtree](https://github.com/ai4trees/pointtree)

- **Stars:** 36 · **Language:** Python · **License:** MIT · **Created:** 2024-04-09 · **Last push:** 2026-10-15
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Paper (unsure):** [treeX: Unsupervised Tree Instance Segmentation in Dense Forest Point Clouds](https://arxiv.org/abs/2509.03633) (arXiv, 2025; first on-topic paper cited in README)
- **Description:** A Python Package for Tree Instance Segmentation in 3D Point Clouds.

### [UQ-EORC/Segfix](https://github.com/UQ-EORC/Segfix)

- **Stars:** 33 · **Language:** Python · **License:** GPL-3.0 · **Created:** 2026-07-02 · **Last push:** 2026-11-10
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Description:** A GUI tool to fix the instance segmentation of tree point clouds.

### [JulFrey/CspStandSegmentation](https://github.com/JulFrey/CspStandSegmentation)

- **Stars:** 26 · **Language:** R · **License:** GPL-3.0 · **Created:** 2022-10-05 · **Last push:** 2026-10-05
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Paper (unsure):** [Quantifying and mapping the ready-to-use veneer volume of European beech trees based on terrestrial laser scanning data](https://doi.org/10.1007/s10342-025-01796-z) (European Journal of Forest Research, 2025; first on-topic paper cited in README)
- **Description:** R package for single tree delination from TLS/MLS/ULS point clouds

### [truebelief/cc-treeiso-plugin](https://github.com/truebelief/cc-treeiso-plugin)

- **Stars:** 19 · **Language:** C++ · **License:** GPL-3.0 · **Created:** 2023-05-05 · **Last push:** 2026-09-28
- **Found via:** GitHub "terrestrial laser scanning tree" (pushed)
- **Paper:** [3D Graph-Based Individual-Tree Isolation (Treeiso) from Terrestrial Laser Scanning Point Clouds](https://doi.org/10.3390/rs14236116) (Remote Sensing, 2022; cited in README, title names the repo)
- **Description:** Individual-tree isolation (treeiso) from terrestrial laser scanning

### [thanhhff/SelectAnyTree](https://github.com/thanhhff/SelectAnyTree)

- **Stars:** 18 · **Language:** unknown · **License:** none · **Created:** 2026-06-25 · **Last push:** 2026-08-27
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Paper:** [SelectAnyTree: A Promptable Instance Segmentation Model for 3D Forest LiDAR Point Clouds](https://arxiv.org/abs/2606.27491) (arXiv, 2026; cited in README, title names the repo)
- **Description:** A Promptable Instance Segmentation Model for 3D Forest LiDAR Point Clouds

### [anditockner/treeX](https://github.com/anditockner/treeX)

- **Stars:** 15 · **Language:** R · **License:** GPL-3.0 · **Created:** 2024-04-08 · **Last push:** 2026-10-27
- **Found via:** GitHub "individual tree detection lidar" (pushed); GitHub "individual tree segmentation" (pushed)
- **Paper (unsure):** [Automatic tree crown segmentation using dense forest point clouds from Personal Laser Scanning (PLS)](https://doi.org/10.1016/j.jag.2022.103025) (International Journal of Applied Earth Observation and Geoinformation, 2022; first on-topic paper cited in README)
- **Description:** Package for individual tree detection and tree segmentation from ground-based LiDAR data

### [aldinorizaldy/TreeLite3D](https://github.com/aldinorizaldy/TreeLite3D)

- **Stars:** 11 · **Language:** Python · **License:** MIT · **Created:** 2025-09-02 · **Last push:** 2026-10-28
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Paper (unsure):** [Label-efficient 3D forest mapping: Self-supervised and transfer learning for instance segmentation, semantic segmentation, and species classification](https://doi.org/10.1016/j.rse.2026.115564) (Remote Sensing of Environment, 2026; first on-topic paper cited in README)
- **Description:** 3D tree segmentation and classification with minimal labels from LiDAR point clouds

### [Putaonjfu/WDTS](https://github.com/Putaonjfu/WDTS)

- **Stars:** 10 · **Language:** Python · **License:** MIT · **Created:** 2025-10-02 · **Last push:** 2026-08-01
- **Found via:** GitHub "terrestrial laser scanning tree" (pushed); GitHub "tree skeleton point cloud" (pushed)
- **Paper (unsure):** [WDTS: Water droplet model-driven entropy optimization for individual tree skeletonization from terrestrial laser scanning point clouds](https://doi.org/10.1016/j.isprsjprs.2026.04.050) (ISPRS Journal of Photogrammetry and Remote Sensing, 2026; recent paper whose title names the repo)
- **Description:** WDTS: Water Droplet Model-Driven Entropy Optimization for Individual Tree Skeletonization from Terrestrial Laser Scanning Point Clouds

### [zhan994/ForestQuery](https://github.com/zhan994/ForestQuery)

- **Stars:** 10 · **Language:** unknown · **License:** Apache-2.0 · **Created:** 2026-09-21 · **Last push:** 2026-10-07
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Paper:** [ForestQuery: Boundary-Aware and Spatially Anchored Query Learning for Unified Forest Point Cloud Segmentation](https://arxiv.org/abs/2610.03403) (arXiv, 2026; cited in README, title names the repo)
- **Description:** ForestQuery: Boundary-Aware and Spatially Anchored Query Learning for Unified Forest Point Cloud Segmentation

### [d-diaz/forest3d](https://github.com/d-diaz/forest3d)

- **Stars:** 10 · **Language:** HTML · **License:** BSD-3-Clause · **Created:** 2018-05-03 · **Last push:** 2026-10-14
- **Found via:** GitHub "forest inventory lidar" (pushed)
- **Description:** 3D visualization of forest inventory plots and probabilistic approach to co-registering a stem map with lidar data

### [slowiklukasz/canopy-synth-2d3d](https://github.com/slowiklukasz/canopy-synth-2d3d)

- **Stars:** 6 · **Language:** unknown · **License:** none · **Created:** 2026-08-06 · **Last push:** 2026-09-21
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed)
- **Description:** A showcase of a procedural Blender + TreeIt pipeline generating synthetic 2D renders and 3D point clouds of trees, with automatic segmentation labels (both semantic and instance) for forestry and urban canopy modeling.

### [yiliutan/TLNet](https://github.com/yiliutan/TLNet)

- **Stars:** 4 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-08-14 · **Last push:** 2026-08-14
- **Found via:** GitHub "lidar tree structure" (created); GitHub "lidar tree structure" (pushed); GitHub "forest point cloud" (created)
- **Paper:** [TLNet: A deep learning framework for tree detection in forest point clouds using multi-layered forest structure](https://doi.org/10.1016/j.isprsjprs.2026.02.002) (ISPRS Journal of Photogrammetry and Remote Sensing, 2026; cited in README, title names the repo)
- **Description:** TLNet: a deep learning framework for tree detection in forest point clouds using multi-layered forest structure

### [slowiklukasz/forest-lidar-instance-segmentation-showcase](https://github.com/slowiklukasz/forest-lidar-instance-segmentation-showcase)

- **Stars:** 4 · **Language:** unknown · **License:** none · **Created:** 2026-08-06 · **Last push:** 2026-09-29
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed); GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Portfolio showcase: transformer-based semantic + instance segmentation of individual trees from synthetic 3D LiDAR point clouds. Custom DETR/Mask3D-style decoder, geometry-aware attention, forest-specific augmentations.

### [UQ-EORC/canopy-filter](https://github.com/UQ-EORC/canopy-filter)

- **Stars:** 4 · **Language:** Python · **License:** none · **Created:** 2026-09-29 · **Last push:** 2026-09-29
- **Found via:** GitHub "leaf wood separation" (created); GitHub "leaf wood separation" (pushed); GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Headless 3D SegFormer point classifier for understory/canopy and wood/leaf separation in forest point clouds

### [heejumun/LeafWood_Segmentation](https://github.com/heejumun/LeafWood_Segmentation)

- **Stars:** 4 · **Language:** Python · **License:** none · **Created:** 2025-02-17 · **Last push:** 2026-10-14
- **Found via:** GitHub "leaf wood separation" (pushed)
- **Paper (unsure):** [The Role of Radiometric Features in Cross-Site Leaf-Wood Segmentation of LiDAR Point Clouds](https://arxiv.org/abs/2609.21903) (arXiv, 2026; recent paper whose title names the repo)
- **Description:** Leaf wood pointcloud separation algorithm.

## Queued for a later scan (61)

Relevant, but over this scan's limit of 20 drafts. They're kept in
`scripts/scan-state.json` and drafted first next time; add one to
`scripts/ignored-repos.txt` to drop it.

### [honkaepp/pointcloudlabeler](https://github.com/honkaepp/pointcloudlabeler)

- **Stars:** 4 · **Language:** Rust · **License:** GPL-3.0 · **Created:** 2026-09-02 · **Last push:** 2026-11-16
- **Found via:** GitHub "terrestrial laser scanning tree" (created); GitHub "terrestrial laser scanning tree" (pushed)
- **Description:** Tree segmentation and forest inventory from terrestrial and mobile laser scans

### [jstrunk001/FUSION2](https://github.com/jstrunk001/FUSION2)

- **Stars:** 3 · **Language:** C++ · **License:** none · **Created:** 2026-09-01 · **Last push:** 2026-10-02
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Suite of command line point cloud processing tools developed to support forest inventory and monitoring applications. Derived from the FUSION software suite developed by Bob McGaughey (USDA Forest Service / PNW Research Station).

### [DijoG/TopTreeSegR](https://github.com/DijoG/TopTreeSegR)

- **Stars:** 2 · **Language:** C++ · **License:** NOASSERTION · **Created:** 2025-11-13 · **Last push:** 2026-10-03
- **Found via:** GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree segmentation" (pushed)
- **Description:** Morse-Smale + Bayesian refinement for high-accuracy, ultra-fast individual tree segmentation on meshes  from LiDAR point clouds ⚡

### [dwang520/LeWoS-py](https://github.com/dwang520/LeWoS-py)

- **Stars:** 2 · **Language:** Python · **License:** MIT · **Created:** 2026-08-06 · **Last push:** 2026-08-06
- **Found via:** GitHub "leaf wood classification point cloud" (created); GitHub "leaf wood classification point cloud" (pushed)
- **Description:** Python implementation of LeWoS: unsupervised leaf-wood classification from TLS point clouds

### [ruoppa/fgi_emit](https://github.com/ruoppa/fgi_emit)

- **Stars:** 2 · **Language:** Python · **License:** MIT · **Created:** 2026-04-10 · **Last push:** 2026-09-14
- **Found via:** GitHub "individual tree segmentation" (pushed)
- **Description:** Official repository of the ISPRS Journal of Photogrammetry and Remote Sensing paper: "Benchmarking individual tree segmentation using multispectral airborne laser scanning data: The FGI-EMIT dataset"

### [Ekko82/sylvanav](https://github.com/Ekko82/sylvanav)

- **Stars:** 2 · **Language:** Python · **License:** MIT · **Created:** 2026-10-11 · **Last push:** 2026-10-23
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Forest drone simulation in Blender and Python, with camera views and geometric point clouds.

### [Zeineb19/ABGbiomass_Carbon_Stock_Estimation_Dashboard](https://github.com/Zeineb19/ABGbiomass_Carbon_Stock_Estimation_Dashboard)

- **Stars:** 1 · **Language:** Python · **License:** none · **Created:** 2026-05-30 · **Last push:** 2026-10-11
- **Found via:** GitHub "lidar tree structure" (pushed)
- **Description:** Interactive Streamlit dashboard for estimating above-ground biomass in the Veluwe, Netherlands, using MLP, XGBoost and CatBoost on spectral data, satellite embeddings and LiDAR-derived tree structure.

### [patitostyle/LIDAR-olive-tree-segmentation-MATLAB](https://github.com/patitostyle/LIDAR-olive-tree-segmentation-MATLAB)

- **Stars:** 1 · **Language:** MATLAB · **License:** MIT · **Created:** 2026-07-24 · **Last push:** 2026-07-24
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed)
- **Description:** MATLAB script for segmenting olive trees and extracting geometric parameters (volume, area) from LIDAR point clouds

### [Remote55/treeq](https://github.com/Remote55/treeq)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2026-05-21 · **Last push:** 2026-09-21
- **Found via:** GitHub "leaf wood separation" (pushed)
- **Description:** 🌲 Tree biomass and carbon from terrestrial LiDAR — wood/leaf separation, QSM geometry, Chave 2014 allometry. Scored against 126 destructively harvested trees, 65 temperate and 61 tropical. Every published figure re-derivable from a committed artefact.

### [hida222/proyek-lidar](https://github.com/hida222/proyek-lidar)

- **Stars:** 1 · **Language:** R · **License:** none · **Created:** 2026-10-05 · **Last push:** 2026-10-05
- **Found via:** GitHub "individual tree detection lidar" (created); GitHub "individual tree detection lidar" (pushed)
- **Description:** LiDAR tree inventory pipeline in R (lidR, sf) and PostGIS: point cloud QC, DTM, CHM, individual tree detection, and per-plot statistics with SQL.

### [iosefa/samstars](https://github.com/iosefa/samstars)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2025-07-15 · **Last push:** 2026-10-16
- **Found via:** GitHub "individual tree segmentation" (pushed); GitHub "tree crown segmentation lidar" (pushed)
- **Description:** A Python library for individual tree crown segmentation from imagery and lidar-derived rasters, using automatic prompts and limited training annotations.

### [shahab199271/occlusion-robust-tls-stem-detection](https://github.com/shahab199271/occlusion-robust-tls-stem-detection)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2026-08-24 · **Last push:** 2026-09-30
- **Found via:** GitHub "terrestrial laser scanning tree" (created); GitHub "terrestrial laser scanning tree" (pushed); GitHub "stem detection point cloud" (created); GitHub "stem detection point cloud" (pushed)
- **Description:** Occlusion-robust stem detection from individual-tree terrestrial laser scanning (TLS) point clouds using graph-based deep learning and geometric post-processing.

### [ayushi-3536/forest-ground-filter](https://github.com/ayushi-3536/forest-ground-filter)

- **Stars:** 1 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-11-12 · **Last push:** 2026-11-12
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Label-free ground removal for forest point clouds: self-seeded CANUPO with a shape-rule fallback

### [SwastikaS/open-lidar-forest-structure](https://github.com/SwastikaS/open-lidar-forest-structure)

- **Stars:** 1 · **Language:** R · **License:** MIT · **Created:** 2026-09-10 · **Last push:** 2026-09-20
- **Found via:** GitHub "forest point cloud" (created)
- **Description:** Open-source extraction of forest structure and biomass indicators from LiDAR point clouds

### [AaronShepp/TreeTimeAlign](https://github.com/AaronShepp/TreeTimeAlign)

- **Stars:** 1 · **Language:** R · **License:** NOASSERTION · **Created:** 2026-08-30 · **Last push:** 2026-08-31
- **Found via:** GitHub "forest point cloud" (created)
- **Description:** A stem-based workflow for intertemporal alignment of TLS forest point clouds

### [suzeln/treesurvey](https://github.com/suzeln/treesurvey)

- **Stars:** 1 · **Language:** HTML · **License:** none · **Created:** 2026-07-20 · **Last push:** 2026-07-26
- **Found via:** GitHub "forest point cloud" (created)
- **Description:** Web-native HKUST tree survey platform for point clouds, TreeX instances, QSM models, and 3D Gaussian Splatting forest twins.

### [rupppy/PiC](https://github.com/rupppy/PiC)

- **Stars:** 1 · **Language:** R · **License:** none · **Created:** 2023-02-22 · **Last push:** 2026-09-28
- **Found via:** GitHub "forest point cloud" (pushed)
- **Description:** R package for TLS/MLS forest point-cloud segmentation and analysis

### [Thinhrichkidz/tls-tree-segmentation](https://github.com/Thinhrichkidz/tls-tree-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-10-20 · **Last push:** 2026-11-13
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Individual-tree segmentation from TLS point clouds (INFO6003)

### [aymen-bouzazi/hedgerow-segmentation](https://github.com/aymen-bouzazi/hedgerow-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-11-09 · **Last push:** 2026-11-09
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed)
- **Description:** Tree-level segmentation of LiDAR point clouds in a hedgerow (ALS + UAV, Python)

### [wiesehahn/diversa_mls_preprocessing](https://github.com/wiesehahn/diversa_mls_preprocessing)

- **Stars:** 0 · **Language:** R · **License:** none · **Created:** 2026-10-15 · **Last push:** 2026-11-03
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** MLS point cloud preprocessing for DIVERSA forest plots: cleaning, ALS alignment and tree segmentation in R.

### [GuilhermeFrAlmeida/agri3d-crop-phenotyping](https://github.com/GuilhermeFrAlmeida/agri3d-crop-phenotyping)

- **Stars:** 0 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-09-19 · **Last push:** 2026-11-02
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** An end-to-end 3D agricultural perception pipeline that processes LiDAR point clouds, performs deep-learning-based segmentation, reconstructs individual plants/trees, and converts 3D geometry into plant-level agricultural measurements.

### [maciekwielgosz/dualcrown3d](https://github.com/maciekwielgosz/dualcrown3d)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-09-25 · **Last push:** 2026-11-05
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** DualCrown3D: Dual-Head Instance Segmentation of Individual Tree Crowns from ALS Point Clouds

### [DijoG/TreeSegPy](https://github.com/DijoG/TreeSegPy)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-09-24 · **Last push:** 2026-09-24
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Tree/non-tree segmentation in TLS-scanned forest point cloud

### [tarulinn/point-cloud-segmentation](https://github.com/tarulinn/point-cloud-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-09-08 · **Last push:** 2026-09-08
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed)
- **Paper (unsure):** [An efficient point cloud segmentation framework integrating physical priors and global optimization for densely canopied rubber tree forests](https://doi.org/10.1016/j.indcrop.2026.124226) (Industrial Crops and Products, 2026; recent paper whose title names the repo)
- **Description:** This is the main algorithm for point cloud segmentation of fruit trees.

### [thx082700/urban-roadside-tree-segmentation](https://github.com/thx082700/urban-roadside-tree-segmentation)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-09-03 · **Last push:** 2026-09-03
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Individual-tree segmentation from mobile LiDAR point clouds for Track 3 of the 9th National LiDAR Conference Point Cloud Data Intelligent Analysis Competition.

### [patitostyle/forinstance-lidar-tree-detection](https://github.com/patitostyle/forinstance-lidar-tree-detection)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-08-20 · **Last push:** 2026-08-20
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree detection lidar" (created); GitHub "individual tree detection lidar" (pushed); GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Individual-tree detection from UAV LiDAR point clouds (FOR-instance benchmark): CHM + local-maximum-filter + watershed segmentation, validated against real per-point tree labels. Precision 0.38 / recall 0.32 on a dense 25-tree natural stand reveals both detector and validation-matching limitations

### [slowiklukasz/canopy-segmentation-showcase](https://github.com/slowiklukasz/canopy-segmentation-showcase)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-08-06 · **Last push:** 2026-08-06
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed)
- **Description:** A showcase of synthetic-to-real data generation and semantic segmentation for tree canopies using RGB and point cloud projections in forestry and urban settings.

### [fpirotti/lasRpipeline](https://github.com/fpirotti/lasRpipeline)

- **Stars:** 0 · **Language:** R · **License:** NOASSERTION · **Created:** 2025-08-06 · **Last push:** 2026-10-30
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Description:** provides wrapper functions for parallel processing of typical forestry lidar workflow, from raw point cloud to tree segmentation

### [cran/crownsegmentr](https://github.com/cran/crownsegmentr)

- **Stars:** 0 · **Language:** C++ · **License:** GPL-3.0 · **Created:** 2025-12-09 · **Last push:** 2026-10-20
- **Found via:** GitHub "point cloud tree segmentation" (pushed); GitHub "tree crown segmentation lidar" (pushed)
- **Description:** :exclamation: This is a read-only mirror of the CRAN R package repository.  crownsegmentr — Tree Crown Segmentation in Airborne LiDAR Point Clouds. Homepage: https://github.com/Lenostatos/crownsegmentr

### [lovroruzman/Diplomski](https://github.com/lovroruzman/Diplomski)

- **Stars:** 0 · **Language:** Jupyter Notebook · **License:** none · **Created:** 2026-07-13 · **Last push:** 2026-09-07
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Description:** Point Cloud Segmentation and Filtering for Tree Isolation Using Machine Learning

### [kimyeonhom1-commits/tls-leaf-wood-active-learning](https://github.com/kimyeonhom1-commits/tls-leaf-wood-active-learning)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-10-15 · **Last push:** 2026-11-05
- **Found via:** GitHub "leaf wood separation" (created); GitHub "leaf wood separation" (pushed)
- **Description:** Acquisition strategies for active learning in TLS leaf–wood separation.

### [flytoee/StemSure](https://github.com/flytoee/StemSure)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-10-04 · **Last push:** 2026-10-04
- **Found via:** GitHub "DBH point cloud" (created); GitHub "DBH point cloud" (pushed); GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Forest LiDAR point-cloud DBH measurement software with candidate-level geometry and quality-control records; free paper reproduction, other uses by permission.

### [marburg4542/forest_ai](https://github.com/marburg4542/forest_ai)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-08-17 · **Last push:** 2026-08-17
- **Found via:** GitHub "DBH point cloud" (created); GitHub "DBH point cloud" (pushed); GitHub "forest point cloud" (created)
- **Description:** Individual tree extraction from forest point clouds: DBH, height and crown from .las/.laz with explicit quality flags

### [cossil/LiDAR-Error-Simulator](https://github.com/cossil/LiDAR-Error-Simulator)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-07-24 · **Last push:** 2026-07-24
- **Found via:** GitHub "DBH point cloud" (created); GitHub "DBH point cloud" (pushed); GitHub "forest inventory lidar" (created); GitHub "forest inventory lidar" (pushed)
- **Description:** LiDAR Simulator is an interactive web app for forest inventory analysis. It visualizes how LiDAR Range Precision (noise σ) and Range Accuracy (systematic bias) impact tree trunk cross-sectional area and DBH calculations. Adjust distance, trunk size, and sensor errors in real time with dynamic canvas point clouds and instant metrics.

### [Lavran/Deep-Learning-Tree-Detection-NAIP-LiDAR](https://github.com/Lavran/Deep-Learning-Tree-Detection-NAIP-LiDAR)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-11-16 · **Last push:** 2026-11-16
- **Found via:** GitHub "individual tree detection lidar" (created); GitHub "individual tree detection lidar" (pushed)
- **Description:** Improving DeepForest's prediction accuracy on NAIP imagery by using LiDAR to segment individual tree crowns

### [jossuema/treelearn-density-transfer](https://github.com/jossuema/treelearn-density-transfer)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-10-05 · **Last push:** 2026-11-11
- **Found via:** GitHub "individual tree detection lidar" (created); GitHub "individual tree detection lidar" (pushed)
- **Description:** Evaluation code and aggregated results: pretrained 3-D networks and classical methods for individual tree detection from airborne LiDAR

### [hassanatic/lidar-canopy-metrics](https://github.com/hassanatic/lidar-canopy-metrics)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-08-20 · **Last push:** 2026-08-20
- **Found via:** GitHub "individual tree detection lidar" (created); GitHub "individual tree detection lidar" (pushed); GitHub "canopy height model individual tree" (created); GitHub "canopy height model individual tree" (pushed)
- **Description:** Canopy height models, individual tree detection and stand metrics from airborne LiDAR (LAS/LAZ), tested against synthetic ground truth

### [jossuema/treeseg-als](https://github.com/jossuema/treeseg-als)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-07-20 · **Last push:** 2026-07-20
- **Found via:** GitHub "individual tree detection lidar" (created); GitHub "individual tree detection lidar" (pushed); GitHub "forest inventory lidar" (created); GitHub "forest inventory lidar" (pushed)
- **Description:** Inventory-anchored evaluation of deep-learning individual tree detection in airborne LiDAR (ALS) — reproducibility code for the Forests (MDPI) paper.

### [devakellc/lidar-tree-benchmark](https://github.com/devakellc/lidar-tree-benchmark)

- **Stars:** 0 · **Language:** R · **License:** MIT · **Created:** 2026-05-27 · **Last push:** 2026-11-14
- **Found via:** GitHub "individual tree detection lidar" (pushed)
- **Description:** Benchmarks for individual-tree detection and crown delineation from airborne LiDAR across classical, point-cloud, deep-learning, and RGB methods.

### [Harry33t/als-tree-inventory-trc](https://github.com/Harry33t/als-tree-inventory-trc)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-09-16 · **Last push:** 2026-11-04
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Competition-aware ALS individual-tree segmentation and trait-specific selective delivery (IEEE TGRS submission): EPCO objective, training configurations, and the reliability-control and evaluation code.

### [Reza-pourali/lidar-individual-tree-segmentation](https://github.com/Reza-pourali/lidar-individual-tree-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-09-25 · **Last push:** 2026-09-25
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** LiDAR individual-tree segmentation with Cut Pursuit, geometric filtering, robust DBH estimation, and structural tree metrics.

### [Harry33t/treelearn-adaptive-scaling](https://github.com/Harry33t/treelearn-adaptive-scaling)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-09-16 · **Last push:** 2026-09-16
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Stand-density-adaptive threshold scaling for TreeLearn-style individual tree segmentation of UAV laser scanning data

### [giserhaili/SylvaSeg3D](https://github.com/giserhaili/SylvaSeg3D)

- **Stars:** 0 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-06-17 · **Last push:** 2026-09-08
- **Found via:** GitHub "individual tree segmentation" (pushed)
- **Description:** A 3D deep learning framework for individual tree segmentation across complex forest scenes.

### [HPourdelan/Synthetic-Forest](https://github.com/HPourdelan/Synthetic-Forest)

- **Stars:** 0 · **Language:** Jupyter Notebook · **License:** none · **Created:** 2025-11-10 · **Last push:** 2026-07-29
- **Found via:** GitHub "individual tree segmentation" (pushed)
- **Description:** (ISPRS 2026) Synthetic Forest: A UAV Laser Scanning Benchmark Dataset for Individual Tree Segmentation, Classification, and Wood Volume Estimation

### [eman0706/TreeQSM-R](https://github.com/eman0706/TreeQSM-R)

- **Stars:** 0 · **Language:** R · **License:** GPL-3.0 · **Created:** 2026-10-12 · **Last push:** 2026-10-12
- **Found via:** GitHub "quantitative structure model tree" (created); GitHub "quantitative structure model tree" (pushed)
- **Description:** R port of TreeQSM 2.4.1 (Raumonen et al.) for quantitative structure models of trees from point clouds, validated against the original (GNU Octave) and field diameters on under-canopy UAV-SfM clouds of an Aleppo pine stand. Research code, not an official TreeQSM release.

### [wuhaobiao8/forestry-3d](https://github.com/wuhaobiao8/forestry-3d)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-11-13 · **Last push:** 2026-11-13
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Smart forestry 3D point cloud platform | 智慧林业三维可视化平台 (Sentinel/LiDAR demo)

### [supervisely-ecosystem/forest-lidar-tree-annotation](https://github.com/supervisely-ecosystem/forest-lidar-tree-annotation)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-11-10 · **Last push:** 2026-11-10
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** A UAV LiDAR forest plot from FOR-instance, ready for labeling individual trees with 3D cuboids and point masks in the 3D point cloud editor.

### [gunduzosman/qgis-treecloud](https://github.com/gunduzosman/qgis-treecloud)

- **Stars:** 0 · **Language:** unknown · **License:** GPL-2.0 · **Created:** 2026-11-06 · **Last push:** 2026-11-06
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** QGIS plugin for tree detection and forest inventory from TLS/ALS point clouds.

### [19991014/SODS-registration](https://github.com/19991014/SODS-registration)

- **Stars:** 0 · **Language:** C++ · **License:** none · **Created:** 2026-11-04 · **Last push:** 2026-11-05
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Multisource forest point cloud registration with semantic-guided keypoints and robust RANSAC mechanisms

### [Lakshya-Samraik/-NZ-LiDAR-Forestry-Deep-Learning](https://github.com/Lakshya-Samraik/-NZ-LiDAR-Forestry-Deep-Learning)

- **Stars:** 0 · **Language:** unknown · **License:** MIT · **Created:** 2026-11-02 · **Last push:** 2026-11-02
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Automated forestry analytics and canopy extraction pipeline utilizing high-resolution airborne LiDAR data and deep learning point cloud segmentation in ArcGIS Pro

### [msuarezrubio/forest_FHD_openness](https://github.com/msuarezrubio/forest_FHD_openness)

- **Stars:** 0 · **Language:** R · **License:** MIT · **Created:** 2026-10-30 · **Last push:** 2026-10-30
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Function to derive below-canopy openness and foliage height diversity (FHD) from mobile laser scanning point clouds.

### [EsiSeguwa/finnish-forest-lidar-analysis](https://github.com/EsiSeguwa/finnish-forest-lidar-analysis)

- **Stars:** 0 · **Language:** R · **License:** none · **Created:** 2026-10-18 · **Last push:** 2026-10-18
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Reproducible exploratory analysis of a Finnish forest point cloud using R and lidR.

### [EmilieVautier/LiS2Forest](https://github.com/EmilieVautier/LiS2Forest)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-10-14 · **Last push:** 2026-10-14
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** FLORA and FLORA_S2: deep learning models for predicting forest structural attributes from airborne LiDAR HD point clouds and Sentinel-2 time series. Code for the LiS2Forest benchmark (REO @ NeurIPS 2026).

### [3dTrees-earth/3dtrees_foreststructure](https://github.com/3dTrees-earth/3dtrees_foreststructure)

- **Stars:** 0 · **Language:** R · **License:** GPL-3.0 · **Created:** 2026-07-20 · **Last push:** 2026-10-15
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Dockerized forest-structure indices for audited 3D point clouds

### [glaucojrcarvalho/multimodal-forest-explorer](https://github.com/glaucojrcarvalho/multimodal-forest-explorer)

- **Stars:** 0 · **Language:** TypeScript · **License:** MIT · **Created:** 2026-10-07 · **Last push:** 2026-10-08
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Interactive research prototype for real forest LiDAR point clouds, tree-level analysis, and reproducible forestry AI research.

### [georgewoolsey/cloud2trees_species_validation](https://github.com/georgewoolsey/cloud2trees_species_validation)

- **Stars:** 0 · **Language:** R · **License:** GPL-3.0 · **Created:** 2026-07-06 · **Last push:** 2026-11-03
- **Found via:** GitHub "forest point cloud" (pushed)
- **Description:** Validating a tree species classification workflow that integrates individual tree detections from aerial point clouds within the cloud2trees framework with the USFS TreeMap product to attach species attributes to single-tree forest inventories.

### [lfxu1/inverse3D](https://github.com/lfxu1/inverse3D)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-08-29 · **Last push:** 2026-08-30
- **Found via:** GitHub "tree skeleton point cloud" (created); GitHub "tree skeleton point cloud" (pushed)
- **Description:** From static point clouds to time-varying L-systems: Skeleton-driven inverse modeling of tree growth dynamics

### [7kamuraNu/SkeletonGM](https://github.com/7kamuraNu/SkeletonGM)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-04-16 · **Last push:** 2026-11-09
- **Found via:** GitHub "tree skeleton point cloud" (pushed)
- **Description:** While LiDAR-based 3D modeling can reflect tree architecture, generating reliable models from dense foliage point clouds has remained difficult. To address this challenge, we developed the Skeleton Generative Method (SkeletonGM), which reconstructs tree trunks and primary branches from mobile laser scanning data even under heavy foliation.

### [band72/lidar-historic-trees](https://github.com/band72/lidar-historic-trees)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-11-15 · **Last push:** 2026-11-16
- **Found via:** GitHub "forest inventory lidar" (created); GitHub "forest inventory lidar" (pushed)
- **Description:** LiDAR tree inventory: find trees, fit stems, DBH with confidence intervals; CSV/DXF export; plugin system; web app. Based on PRBonn/forest_inventory_pipeline.

### [UBC-FRESH/fresh-urban-forest-lab](https://github.com/UBC-FRESH/fresh-urban-forest-lab)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-11-03 · **Last push:** 2026-11-16
- **Found via:** GitHub "forest inventory lidar" (created); GitHub "forest inventory lidar" (pushed)
- **Description:** Open urban-forest LiDAR, tree-inventory, growth, and 2D/3D decision-support lab (UBC pilot)

### [7ao6688-hash/new-forest-lidar-inventory](https://github.com/7ao6688-hash/new-forest-lidar-inventory)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-09-08 · **Last push:** 2026-09-08
- **Found via:** GitHub "forest inventory lidar" (created); GitHub "forest inventory lidar" (pushed)
- **Description:** Reproducible LiDAR forest-inventory workflow for canopy-height metrics, uncertainty-aware stand screening and decision-ready reporting.

## Low relevance, not drafted (26)

Matched a search but not the tree + LiDAR/point-cloud keyword check. Reported once.

### [abhispace27/forest-lidar-inventory](https://github.com/abhispace27/forest-lidar-inventory)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-10-26 · **Last push:** 2026-10-26
- **Found via:** GitHub "forest inventory lidar" (created); GitHub "forest inventory lidar" (pushed)

### [gpujouninravine/rekordbox-Professional-7-Free-Professional-DJ-Software](https://github.com/gpujouninravine/rekordbox-Professional-7-Free-Professional-DJ-Software)

- **Stars:** 8 · **Language:** unknown · **License:** none · **Created:** 2026-06-10 · **Last push:** 2026-11-11
- **Found via:** GitHub "stem detection point cloud" (pushed)
- **Description:** Get rekordbox Professional 7 for free. Explore professional DJ mixing, advanced track analysis, cloud library synchronization, DVS control, real-time STEMS, video mixing, advanced DJ effects, automatic Cue point detection, playlist management, and professional DJ performance tools.

### [Juanmaherruzo/Dehesa-Crown-Segmentation-YOLOv11](https://github.com/Juanmaherruzo/Dehesa-Crown-Segmentation-YOLOv11)

- **Stars:** 7 · **Language:** Python · **License:** MIT · **Created:** 2026-04-29 · **Last push:** 2026-08-11
- **Found via:** GitHub "individual tree segmentation" (pushed)
- **Description:** Instance segmentation of individual tree crowns in Mediterranean Dehesa ecosystems using YOLOv11

### [leonrenkin/PersForest](https://github.com/leonrenkin/PersForest)

- **Stars:** 2 · **Language:** Jupyter Notebook · **License:** MIT · **Created:** 2025-08-15 · **Last push:** 2026-11-15
- **Found via:** GitHub "forest point cloud" (pushed)
- **Description:** Python tools for studying how codimension 1 topological cycles evolve in point-cloud data. Compute codim 1 cycle representatives at fixed scales or across scales, create quantitative summaries for comparison, and visualize or animate cycle representatives and barcodes.

### [swfu-lqy/individual_olive_tree_segmentation](https://github.com/swfu-lqy/individual_olive_tree_segmentation)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2026-11-10 · **Last push:** 2026-11-14
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)

### [NikitinaAD/tree-crown-segment](https://github.com/NikitinaAD/tree-crown-segment)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2026-10-23 · **Last push:** 2026-10-24
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** QGIS plugin and local inference engine for individual tree crown segmentation in georeferenced RGB orthomosaics.

### [jqyang22/UniTree](https://github.com/jqyang22/UniTree)

- **Stars:** 1 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-02-02 · **Last push:** 2026-09-21
- **Found via:** GitHub "individual tree segmentation" (pushed)
- **Description:** The official repo for "Unified Knowledge Transfer Boost Individual Tree Crown Segmentation without Scene-specific Labels".

### [lorenzovadacca/Classification-performance-analysis-sensors-fusion](https://github.com/lorenzovadacca/Classification-performance-analysis-sensors-fusion)

- **Stars:** 1 · **Language:** Python · **License:** none · **Created:** 2026-10-30 · **Last push:** 2026-10-30
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Comparative multi-sensor object classification study for autonomous vehicles on the TruckScenes dataset. Combines 3D LiDAR and RADAR point clouds via spatial and geometric feature engineering with Random Forest classifiers. Demonstrates that early-stage fusion achieves 99.1% accuracy, cutting misclassifications significantly under 5-fold CV

### [faisal-ajao/interactive-point-cloud-feature-extraction](https://github.com/faisal-ajao/interactive-point-cloud-feature-extraction)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-08-30 · **Last push:** 2026-11-09
- **Found via:** GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed)
- **Description:** Interactive 3D point cloud feature extraction and segmentation using PCA, KD-Tree, and PyVista. Computes planarity, linearity, omnivariance, and verticality.

### [holmech-dev/sensor_fusion_course_lidar](https://github.com/holmech-dev/sensor_fusion_course_lidar)

- **Stars:** 0 · **Language:** Makefile · **License:** none · **Created:** 2021-08-06 · **Last push:** 2026-08-29
- **Found via:** GitHub "point cloud tree segmentation" (pushed)
- **Description:** C++/PCL lidar obstacle detection: RANSAC plane segmentation and Euclidean clustering over a KD-tree to separate road from vehicles in streamed point cloud data, with bounding box tracking.

### [JH-C7/individual-tree](https://github.com/JH-C7/individual-tree)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-11-01 · **Last push:** 2026-11-01
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** individual-tree segmentation using RGB and CHM

### [biubiubiuc7/Star-tree](https://github.com/biubiubiuc7/Star-tree)

- **Stars:** 0 · **Language:** Python · **License:** BSD-3-Clause · **Created:** 2026-11-01 · **Last push:** 2026-11-01
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** A novel method for individual tree segmentation and species identification

### [gopalsambrekar/maskrcnn-multiband-drone-imagery](https://github.com/gopalsambrekar/maskrcnn-multiband-drone-imagery)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-10-31 · **Last push:** 2026-10-31
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Implementation of Mask R-CNN for individual tree crown instance segmentation using 5-band multispectral drone imagery.

### [TianqiWang11/canopy-instance-segmentation](https://github.com/TianqiWang11/canopy-instance-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-09-27 · **Last push:** 2026-09-27
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Mask2Former and SAM2 pipeline for multi-season individual tree crown instance segmentation.

### [NUIST-Zhang/Individual-Tree-Segmentation](https://github.com/NUIST-Zhang/Individual-Tree-Segmentation)

- **Stars:** 0 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-09-21 · **Last push:** 2026-09-22
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Official code for "Individual Tree Segmentation Using Deep Learning and Climbing Algorithm" (PE&RS, 2025). Based on CN Patent ZL 2024 1 0765468.3. Developed by NUIST Zhang Fangmin Group.

### [leiguangbin/MTC-ITSMAE](https://github.com/leiguangbin/MTC-ITSMAE)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-08-17 · **Last push:** 2026-08-17
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** "A multi-task collaborative method for individual tree segmentation and multi-dimensional attribute extraction in mountainous areas using deep learning technologies" This paper has been submitted for publication in International Journal of Applied Earth Observation and Geoinformation

### [22166025/Tree-Detection](https://github.com/22166025/Tree-Detection)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-07-26 · **Last push:** 2026-08-06
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Automated Individual-Tree Crown Segmentation from Historical and Contemporary Aerial Imagery

### [mxkopf/leipzig-tree-crown-mapping-yolo26](https://github.com/mxkopf/leipzig-tree-crown-mapping-yolo26)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-08-04 · **Last push:** 2026-08-04
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** This release contains the workflow for predicted individual tree-crown polygons for Leipzig, Germany. The tree crowns were generated from high-resolution RGBI aerial orthophotos using a YOLO26x instance-segmentation model and subsequent polygon post-processing.

### [Miraki1401/Tree-Crown-Segmentation-SAM](https://github.com/Miraki1401/Tree-Crown-Segmentation-SAM)

- **Stars:** 0 · **Language:** Jupyter Notebook · **License:** MIT · **Created:** 2026-07-31 · **Last push:** 2026-11-06
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Customized workflow for individual tree crown segmentation from UAV RGB imagery using the Segment Anything Model (SAM)

### [prembabu007/point-cloud-defect-detection](https://github.com/prembabu007/point-cloud-defect-detection)

- **Stars:** 0 · **Language:** Jupyter Notebook · **License:** none · **Created:** 2026-11-08 · **Last push:** 2026-11-08
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Finding a part in a noisy 3D scan by CAD registration (Open3D, ICP), segmenting it (distance threshold, DBSCAN) and detecting defects with geometric features + random forest. University of Koblenz Research Lab.

### [abdullahyousaf-dev/tower-pointcloud-segmentation](https://github.com/abdullahyousaf-dev/tower-pointcloud-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-10-29 · **Last push:** 2026-10-29
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Segment telecom tower point clouds and fit 3D antenna cuboids. Recall 0.98, azimuth error 0.24°. RANSAC, DBSCAN, random forest, PCA.

### [orukundo/INFRA3DRC-Radar-Classification](https://github.com/orukundo/INFRA3DRC-Radar-Classification)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-08-10 · **Last push:** 2026-08-10
- **Found via:** GitHub "forest point cloud" (created)
- **Description:** Radar point-cloud classification on INFRA-3DRC using Random Forest and PointNet++ baselines, with training, evaluation, and confusion-matrix reporting.

### [rajeshp277/point-cloud-localization-maps](https://github.com/rajeshp277/point-cloud-localization-maps)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-08-05 · **Last push:** 2026-08-05
- **Found via:** GitHub "forest point cloud" (created)
- **Description:** Automated 3D LiDAR point cloud pipeline: Random Forest semantic segmentation → PCA plane extraction → Convex Hull → Douglas-Peucker → Delaunay triangulation localization map | LUCOOP dataset | 95% size reduction | 170mm RMSE

### [igorpawelec/pycacumen](https://github.com/igorpawelec/pycacumen)

- **Stars:** 0 · **Language:** Python · **License:** GPL-3.0 · **Created:** 2026-08-24 · **Last push:** 2026-11-06
- **Found via:** GitHub "canopy height model individual tree" (created); GitHub "canopy height model individual tree" (pushed)
- **Description:** A Python toolkit based on PyCrown for delineating individual tree crowns from a Canopy Height Model (CHM).

### [sophm1025/TreeClassification](https://github.com/sophm1025/TreeClassification)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-09-17 · **Last push:** 2026-11-02
- **Found via:** GitHub "canopy height model individual tree" (created); GitHub "canopy height model individual tree" (pushed)
- **Description:** Develops an automated workflow for mapping individual tree crowns and classifying tree species using NEON canopy height models, high-resolution RGB imagery, and hyperspectral data. It uses Mask R-CNN for crown refinement and a Vision Transformer for species classification.

### [igorpawelec/rcacumen](https://github.com/igorpawelec/rcacumen)

- **Stars:** 0 · **Language:** R · **License:** GPL-3.0 · **Created:** 2026-08-24 · **Last push:** 2026-10-27
- **Found via:** GitHub "canopy height model individual tree" (created); GitHub "canopy height model individual tree" (pushed)
- **Description:** An R toolkit based on PyCrown in Python for delineating individual tree crowns from a Canopy Height Model (CHM).

## Recent papers without linked code (30)

The catalog needs a code repository, so these aren't drafted. Worth checking whether code
was released elsewhere (paper's data-availability section, author pages, Zenodo).

- [Effects of Laser Beam Width and Measurement Noise on Tree Diameter Estimation in Laser Scanning](https://arxiv.org/abs/2611.13739) — Muhojoki et al., arXiv (2026-11-10)
- [FOSCo-Net: Ego-centric Voxel Completion for Forest LiDAR Occlusions](https://arxiv.org/abs/2611.06588) — Esfandiyar et al., arXiv (2026-11-04)
- [3Dtrees.earth: community research infrastructure for tree and forest analysis using close-range LiDAR data](https://arxiv.org/abs/2610.37803) — Vajna-Jehle et al., arXiv (2026-10-27)
- [TNVD-SC: Diagnosing Scan Context Failures in Forests with Terrain-Normalized Vertical Distributions](https://arxiv.org/abs/2610.25637) — Kim et al., arXiv (2026-10-19)
- [Immersive Focus+Context Techniques to Assist in Interpretation of High Density Forest Point Clouds](https://arxiv.org/abs/2610.22878) — O'Keeffe et al., arXiv (2026-10-16)
- [Evaluating LiDAR Data Sources, Predictor Resolution, and Spatial Random Effects in Bayesian Change-of-Support Models for Forest Inventory](https://arxiv.org/abs/2610.06476) — Spitta et al., arXiv (2026-10-05)
- [ArborSplat: Online Semantic Gaussian Splatting SLAM for Orchards](https://arxiv.org/abs/2609.26315) — Masini et al., arXiv (2026-09-22)
- [CedarCypress3D: an annotated UAV-LiDAR dataset of individual trees in planted cedar and cypress forests](https://arxiv.org/abs/2608.30149) — Shimizu et al., arXiv (2026-08-31)
- [Watershed vs. Region Growing for Individual Tree Segmentation from Airborne LiDAR: An Urban Case Study in Bologna](https://arxiv.org/abs/2607.27018) — Canfora et al., arXiv (2026-07-29)
- [A Framework for Individual Tree Growth Reconstruction Using Multi-Platform Laser Scanning](https://arxiv.org/abs/2607.22129) — Tavi et al., arXiv (2026-07-24)
- [Estimating Urban Tree Volume and Carbon Storage Using Terrestrial Laser Scanning](https://doi.org/10.3390/land15101889) — Shim et al., Land (2026-10-07)
- [Semantic Voxel-Based Individual Tree Segmentation for Robust Stem Volume Estimation from Plot-Level Terrestrial Laser Scanning Data](https://doi.org/10.3390/f17091000) — Liu et al., Forests (2026-08-22)
- [VEGESEGNET++: a deep learning framework for vegetation segmentation in urban environments using airborne laser scanning point cloud data](https://doi.org/10.1016/j.asr.2026.07.088) — Singh, Advances in Space Research (2026-10)
- [Model-based estimation of tree centroids and required felling forces using terrestrial laser scanning data](https://doi.org/10.1016/j.atech.2026.101995) — Svazek et al., Smart Agricultural Technology (2026-08)
- [Fallen Tree Detection and Mapping from Airborne Laser Scanning Point Clouds Using Physics-Guided Supervoxel Learning](https://doi.org/10.3390/rs18203558) — Liang et al., Remote Sensing (2026-10-16)
- [Accuracy assessment of terrestrial laser scanning for estimating tree height, diameter at breast height, crown dimensions, and aboveground biomass](https://doi.org/10.6008/cbpc2318-2881.2026.001.0003) — Yilmaz, Nature and Conservation (2026-09-23)
- [Standardized terrestrial laser scanning dataset of forests: 3D point clouds and tree-level attributes from 121 plots across five European regions](https://doi.org/10.1016/j.dib.2026.113024) — Herrmann et al., Data in Brief (2026-08)
- [A beam-informed framework for Leaf Area Density estimation from Mobile Terrestrial Laser Scanning](https://doi.org/10.1007/s11119-026-10406-w) — Murcia et al., Precision Agriculture (2026-07-29)
- [Mobile laser scanning in Himalayan tree-line ecotones: Operational challenges and practical considerations](https://doi.org/10.1016/j.mex.2026.104245) — Bhatta et al., MethodsX (2026-12)
- [Improving handheld Laser Scanning Point Cloud Quality in Forests via RTK-GNSS integrated SLAM](https://doi.org/10.5194/isprs-archives-xlix-b2-2026-261-2026) — Rünger et al., The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences (2026-07-23)
- [Laser scanning of high frequency tree movement](https://doi.org/10.1088/1361-6501/ae9b37) — Jong et al., Measurement Science and Technology (2026-09-02)
- [Leaf and Wood Classification of Camellia oleifera Using ISGA-XGBoost from Terrestrial Laser Scanning Data](https://doi.org/10.3390/agriculture16212437) — Wang et al., Agriculture (2026-11-07)
- [Using Terrestrial Laser Scanning and Empirical Allometries to Develop Biomass Error Estimates for Black Mangrove Trees](https://doi.org/10.1007/s13157-026-02128-6) — Price et al., Wetlands (2026-09-24)
- [ForestSeg3D: A semantically guided framework for individual tree segmentation from LiDAR point clouds](https://doi.org/10.1016/j.plaphe.2026.100261) — Zhang et al., Plant Phenomics (2026-09)
- [A Unified Framework for Individual Tree Segmentation and Forest Biometrics Derivation from LiDAR Point Clouds Captured by Different Platforms in Diverse Forest Environments](https://doi.org/10.3390/rs18173059) — Hanafy et al., Remote Sensing (2026-09-07)
- [Individual tree segmentation from UAV LiDAR data based on PointNet++ network](https://doi.org/10.3389/fpls.2026.1985967) — Liu et al., Frontiers in Plant Science (2026-10-28)
- [Tree-Component Segmentation of UAV LiDAR Point Clouds Using Attention-Enhanced PointNet++](https://doi.org/10.3390/app162110975) — Hu et al., Applied Sciences (2026-11-05)
- [A Comparative Study of Deep Learning and Unsupervised Segmentation Methods for
Individual Tree Delineation from LiDAR Point Clouds](https://doi.org/10.5194/isprs-archives-xlix-b2-2026-1125-2026) — Wang et al., The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences (2026-07-23)
- [Tree growth prediction based on lidar point cloud by using a fusion data model](https://doi.org/10.1049/icp.2026.4192) — Chen et al., IET Conference Proceedings (2026-10-01)
- [Improved PointNet++ stem semantics for individual tree segmentation and structural parameter extraction in eucalyptus plantations using UAV-LiDAR](https://doi.org/10.1016/j.srs.2026.100496) — Wang et al., Science of Remote Sensing (2026-12)
