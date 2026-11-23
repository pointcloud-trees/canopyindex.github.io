# New method candidates (scan: 2026-11-23)

Scan window: repos created or pushed, and papers published, since **2026-11-09**.
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

### [honkaepp/pointcloudlabeler](https://github.com/honkaepp/pointcloudlabeler)

- **Stars:** 4 · **Language:** Rust · **License:** GPL-3.0 · **Created:** 2026-09-02 · **Last push:** 2026-11-16
- **Found via:** queued from an earlier scan; GitHub "terrestrial laser scanning tree" (pushed)
- **Description:** Tree segmentation and forest inventory from terrestrial and mobile laser scans

### [jstrunk001/FUSION2](https://github.com/jstrunk001/FUSION2)

- **Stars:** 3 · **Language:** C++ · **License:** none · **Created:** 2026-09-01 · **Last push:** 2026-10-02
- **Found via:** queued from an earlier scan
- **Description:** Suite of command line point cloud processing tools developed to support forest inventory and monitoring applications. Derived from the FUSION software suite developed by Bob McGaughey (USDA Forest Service / PNW Research Station).

### [DijoG/TopTreeSegR](https://github.com/DijoG/TopTreeSegR)

- **Stars:** 2 · **Language:** C++ · **License:** NOASSERTION · **Created:** 2025-11-13 · **Last push:** 2026-10-03
- **Found via:** queued from an earlier scan
- **Description:** Morse-Smale + Bayesian refinement for high-accuracy, ultra-fast individual tree segmentation on meshes  from LiDAR point clouds ⚡

### [dwang520/LeWoS-py](https://github.com/dwang520/LeWoS-py)

- **Stars:** 2 · **Language:** Python · **License:** MIT · **Created:** 2026-08-06 · **Last push:** 2026-08-06
- **Found via:** queued from an earlier scan
- **Paper:** [LeWoS: A universal leaf‐wood classification method to facilitate the 3D modelling of large tropical trees using terrestrial LiDAR](https://doi.org/10.1111/2041-210x.13342) (Methods in Ecology and Evolution, 2020; cited in README, title names the repo)
- **Description:** Python implementation of LeWoS: unsupervised leaf-wood classification from TLS point clouds

### [ruoppa/fgi_emit](https://github.com/ruoppa/fgi_emit)

- **Stars:** 2 · **Language:** Python · **License:** MIT · **Created:** 2026-04-10 · **Last push:** 2026-09-14
- **Found via:** queued from an earlier scan
- **Paper:** [Benchmarking individual tree segmentation using multispectral airborne laser scanning data: The FGI-EMIT dataset](https://doi.org/10.1016/j.isprsjprs.2026.04.021) (ISPRS Journal of Photogrammetry and Remote Sensing, 2026; cited in README, title names the repo)
- **Description:** Official repository of the ISPRS Journal of Photogrammetry and Remote Sensing paper: "Benchmarking individual tree segmentation using multispectral airborne laser scanning data: The FGI-EMIT dataset"

### [Ekko82/sylvanav](https://github.com/Ekko82/sylvanav)

- **Stars:** 2 · **Language:** Python · **License:** MIT · **Created:** 2026-10-11 · **Last push:** 2026-10-23
- **Found via:** queued from an earlier scan
- **Description:** Forest drone simulation in Blender and Python, with camera views and geometric point clouds.

### [Zeineb19/ABGbiomass_Carbon_Stock_Estimation_Dashboard](https://github.com/Zeineb19/ABGbiomass_Carbon_Stock_Estimation_Dashboard)

- **Stars:** 1 · **Language:** Python · **License:** none · **Created:** 2026-05-30 · **Last push:** 2026-10-11
- **Found via:** queued from an earlier scan
- **Description:** Interactive Streamlit dashboard for estimating above-ground biomass in the Veluwe, Netherlands, using MLP, XGBoost and CatBoost on spectral data, satellite embeddings and LiDAR-derived tree structure.

### [patitostyle/LIDAR-olive-tree-segmentation-MATLAB](https://github.com/patitostyle/LIDAR-olive-tree-segmentation-MATLAB)

- **Stars:** 1 · **Language:** MATLAB · **License:** MIT · **Created:** 2026-07-24 · **Last push:** 2026-07-24
- **Found via:** queued from an earlier scan
- **Description:** MATLAB script for segmenting olive trees and extracting geometric parameters (volume, area) from LIDAR point clouds

### [Remote55/treeq](https://github.com/Remote55/treeq)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2026-05-21 · **Last push:** 2026-09-21
- **Found via:** queued from an earlier scan
- **Description:** 🌲 Tree biomass and carbon from terrestrial LiDAR — wood/leaf separation, QSM geometry, Chave 2014 allometry. Scored against 126 destructively harvested trees, 65 temperate and 61 tropical. Every published figure re-derivable from a committed artefact.

### [hida222/proyek-lidar](https://github.com/hida222/proyek-lidar)

- **Stars:** 1 · **Language:** R · **License:** none · **Created:** 2026-10-05 · **Last push:** 2026-10-05
- **Found via:** queued from an earlier scan
- **Description:** LiDAR tree inventory pipeline in R (lidR, sf) and PostGIS: point cloud QC, DTM, CHM, individual tree detection, and per-plot statistics with SQL.

### [iosefa/samstars](https://github.com/iosefa/samstars)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2025-07-15 · **Last push:** 2026-11-20
- **Found via:** queued from an earlier scan; GitHub "individual tree segmentation" (pushed); GitHub "tree crown segmentation lidar" (pushed)
- **Description:** A Python library for individual tree crown segmentation from imagery and lidar-derived rasters, using automatic prompts and limited training annotations.

### [shahab199271/occlusion-robust-tls-stem-detection](https://github.com/shahab199271/occlusion-robust-tls-stem-detection)

- **Stars:** 1 · **Language:** Python · **License:** MIT · **Created:** 2026-08-24 · **Last push:** 2026-09-30
- **Found via:** queued from an earlier scan
- **Description:** Occlusion-robust stem detection from individual-tree terrestrial laser scanning (TLS) point clouds using graph-based deep learning and geometric post-processing.

### [ayushi-3536/forest-ground-filter](https://github.com/ayushi-3536/forest-ground-filter)

- **Stars:** 1 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-11-12 · **Last push:** 2026-11-12
- **Found via:** queued from an earlier scan; GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Label-free ground removal for forest point clouds: self-seeded CANUPO with a shape-rule fallback

### [SwastikaS/open-lidar-forest-structure](https://github.com/SwastikaS/open-lidar-forest-structure)

- **Stars:** 1 · **Language:** R · **License:** MIT · **Created:** 2026-09-10 · **Last push:** 2026-09-20
- **Found via:** queued from an earlier scan
- **Description:** Open-source extraction of forest structure and biomass indicators from LiDAR point clouds

### [AaronShepp/TreeTimeAlign](https://github.com/AaronShepp/TreeTimeAlign)

- **Stars:** 1 · **Language:** R · **License:** NOASSERTION · **Created:** 2026-08-30 · **Last push:** 2026-11-22
- **Found via:** queued from an earlier scan; GitHub "forest point cloud" (pushed)
- **Paper (unsure):** [Fast registration of forest terrestrial laser scans using key points detected from crowns and stems](https://doi.org/10.1080/17538947.2020.1764118) (International Journal of Digital Earth, 2020; first on-topic paper cited in README)
- **Description:** A stem-based workflow for intertemporal alignment of TLS forest point clouds

### [suzeln/treesurvey](https://github.com/suzeln/treesurvey)

- **Stars:** 1 · **Language:** HTML · **License:** none · **Created:** 2026-07-20 · **Last push:** 2026-07-26
- **Found via:** queued from an earlier scan
- **Description:** Web-native HKUST tree survey platform for point clouds, TreeX instances, QSM models, and 3D Gaussian Splatting forest twins.

### [rupppy/PiC](https://github.com/rupppy/PiC)

- **Stars:** 1 · **Language:** R · **License:** none · **Created:** 2023-02-22 · **Last push:** 2026-09-28
- **Found via:** queued from an earlier scan
- **Paper (unsure):** [An automated approach for wood-leaf separation from terrestrial LIDAR point clouds using the density based clustering algorithm DBSCAN](https://doi.org/10.1016/j.agrformet.2018.04.008) (Agricultural and Forest Meteorology, 2018; first on-topic paper cited in README)
- **Description:** R package for TLS/MLS forest point-cloud segmentation and analysis

### [Thinhrichkidz/tls-tree-segmentation](https://github.com/Thinhrichkidz/tls-tree-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-10-20 · **Last push:** 2026-11-13
- **Found via:** queued from an earlier scan; GitHub "point cloud tree segmentation" (pushed); GitHub "individual tree segmentation" (pushed)
- **Description:** Individual-tree segmentation from TLS point clouds (INFO6003)

### [aymen-bouzazi/hedgerow-segmentation](https://github.com/aymen-bouzazi/hedgerow-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-11-09 · **Last push:** 2026-11-09
- **Found via:** queued from an earlier scan; GitHub "point cloud tree segmentation" (created); GitHub "point cloud tree segmentation" (pushed)
- **Description:** Tree-level segmentation of LiDAR point clouds in a hedgerow (ALS + UAV, Python)

### [wiesehahn/diversa_mls_preprocessing](https://github.com/wiesehahn/diversa_mls_preprocessing)

- **Stars:** 0 · **Language:** R · **License:** none · **Created:** 2026-10-15 · **Last push:** 2026-11-03
- **Found via:** queued from an earlier scan
- **Description:** MLS point cloud preprocessing for DIVERSA forest plots: cleaning, ALS alignment and tree segmentation in R.

## Queued for a later scan (45)

Relevant, but over this scan's limit of 20 drafts. They're kept in
`scripts/scan-state.json` and drafted first next time; add one to
`scripts/ignored-repos.txt` to drop it.

### [GuilhermeFrAlmeida/agri3d-crop-phenotyping](https://github.com/GuilhermeFrAlmeida/agri3d-crop-phenotyping)

- **Stars:** 0 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-09-19 · **Last push:** 2026-11-02
- **Found via:** queued from an earlier scan
- **Description:** An end-to-end 3D agricultural perception pipeline that processes LiDAR point clouds, performs deep-learning-based segmentation, reconstructs individual plants/trees, and converts 3D geometry into plant-level agricultural measurements.

### [maciekwielgosz/dualcrown3d](https://github.com/maciekwielgosz/dualcrown3d)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-09-25 · **Last push:** 2026-11-05
- **Found via:** queued from an earlier scan
- **Description:** DualCrown3D: Dual-Head Instance Segmentation of Individual Tree Crowns from ALS Point Clouds

### [DijoG/TreeSegPy](https://github.com/DijoG/TreeSegPy)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-09-24 · **Last push:** 2026-09-24
- **Found via:** queued from an earlier scan
- **Description:** Tree/non-tree segmentation in TLS-scanned forest point cloud

### [tarulinn/point-cloud-segmentation](https://github.com/tarulinn/point-cloud-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-09-08 · **Last push:** 2026-09-08
- **Found via:** queued from an earlier scan
- **Description:** This is the main algorithm for point cloud segmentation of fruit trees.

### [thx082700/urban-roadside-tree-segmentation](https://github.com/thx082700/urban-roadside-tree-segmentation)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-09-03 · **Last push:** 2026-09-03
- **Found via:** queued from an earlier scan
- **Description:** Individual-tree segmentation from mobile LiDAR point clouds for Track 3 of the 9th National LiDAR Conference Point Cloud Data Intelligent Analysis Competition.

### [patitostyle/forinstance-lidar-tree-detection](https://github.com/patitostyle/forinstance-lidar-tree-detection)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-08-20 · **Last push:** 2026-08-20
- **Found via:** queued from an earlier scan
- **Description:** Individual-tree detection from UAV LiDAR point clouds (FOR-instance benchmark): CHM + local-maximum-filter + watershed segmentation, validated against real per-point tree labels. Precision 0.38 / recall 0.32 on a dense 25-tree natural stand reveals both detector and validation-matching limitations

### [slowiklukasz/canopy-segmentation-showcase](https://github.com/slowiklukasz/canopy-segmentation-showcase)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-08-06 · **Last push:** 2026-08-06
- **Found via:** queued from an earlier scan
- **Description:** A showcase of synthetic-to-real data generation and semantic segmentation for tree canopies using RGB and point cloud projections in forestry and urban settings.

### [fpirotti/lasRpipeline](https://github.com/fpirotti/lasRpipeline)

- **Stars:** 0 · **Language:** R · **License:** NOASSERTION · **Created:** 2025-08-06 · **Last push:** 2026-10-30
- **Found via:** queued from an earlier scan
- **Description:** provides wrapper functions for parallel processing of typical forestry lidar workflow, from raw point cloud to tree segmentation

### [cran/crownsegmentr](https://github.com/cran/crownsegmentr)

- **Stars:** 0 · **Language:** C++ · **License:** GPL-3.0 · **Created:** 2025-12-09 · **Last push:** 2026-10-20
- **Found via:** queued from an earlier scan
- **Description:** :exclamation: This is a read-only mirror of the CRAN R package repository.  crownsegmentr — Tree Crown Segmentation in Airborne LiDAR Point Clouds. Homepage: https://github.com/Lenostatos/crownsegmentr

### [lovroruzman/Diplomski](https://github.com/lovroruzman/Diplomski)

- **Stars:** 0 · **Language:** Jupyter Notebook · **License:** none · **Created:** 2026-07-13 · **Last push:** 2026-09-07
- **Found via:** queued from an earlier scan
- **Description:** Point Cloud Segmentation and Filtering for Tree Isolation Using Machine Learning

### [kimyeonhom1-commits/tls-leaf-wood-active-learning](https://github.com/kimyeonhom1-commits/tls-leaf-wood-active-learning)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-10-15 · **Last push:** 2026-11-05
- **Found via:** queued from an earlier scan
- **Description:** Acquisition strategies for active learning in TLS leaf–wood separation.

### [flytoee/StemSure](https://github.com/flytoee/StemSure)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-10-04 · **Last push:** 2026-10-04
- **Found via:** queued from an earlier scan
- **Description:** Forest LiDAR point-cloud DBH measurement software with candidate-level geometry and quality-control records; free paper reproduction, other uses by permission.

### [cossil/LiDAR-Error-Simulator](https://github.com/cossil/LiDAR-Error-Simulator)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-07-24 · **Last push:** 2026-07-24
- **Found via:** queued from an earlier scan
- **Description:** LiDAR Simulator is an interactive web app for forest inventory analysis. It visualizes how LiDAR Range Precision (noise σ) and Range Accuracy (systematic bias) impact tree trunk cross-sectional area and DBH calculations. Adjust distance, trunk size, and sensor errors in real time with dynamic canvas point clouds and instant metrics.

### [Lavran/Deep-Learning-Tree-Detection-NAIP-LiDAR](https://github.com/Lavran/Deep-Learning-Tree-Detection-NAIP-LiDAR)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-11-16 · **Last push:** 2026-11-16
- **Found via:** queued from an earlier scan; GitHub "individual tree detection lidar" (created); GitHub "individual tree detection lidar" (pushed)
- **Description:** Improving DeepForest's prediction accuracy on NAIP imagery by using LiDAR to segment individual tree crowns.

### [jossuema/treelearn-density-transfer](https://github.com/jossuema/treelearn-density-transfer)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-10-05 · **Last push:** 2026-11-11
- **Found via:** queued from an earlier scan; GitHub "individual tree detection lidar" (pushed)
- **Description:** Evaluation code and aggregated results: pretrained 3-D networks and classical methods for individual tree detection from airborne LiDAR

### [hassanatic/lidar-canopy-metrics](https://github.com/hassanatic/lidar-canopy-metrics)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-08-20 · **Last push:** 2026-08-20
- **Found via:** queued from an earlier scan
- **Description:** Canopy height models, individual tree detection and stand metrics from airborne LiDAR (LAS/LAZ), tested against synthetic ground truth

### [jossuema/treeseg-als](https://github.com/jossuema/treeseg-als)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-07-20 · **Last push:** 2026-07-20
- **Found via:** queued from an earlier scan
- **Description:** Inventory-anchored evaluation of deep-learning individual tree detection in airborne LiDAR (ALS) — reproducibility code for the Forests (MDPI) paper.

### [devakellc/lidar-tree-benchmark](https://github.com/devakellc/lidar-tree-benchmark)

- **Stars:** 0 · **Language:** R · **License:** MIT · **Created:** 2026-05-27 · **Last push:** 2026-11-23
- **Found via:** queued from an earlier scan; GitHub "individual tree detection lidar" (pushed)
- **Description:** Benchmarks for individual-tree detection and crown delineation from airborne LiDAR across classical, point-cloud, deep-learning, and RGB methods.

### [Harry33t/als-tree-inventory-trc](https://github.com/Harry33t/als-tree-inventory-trc)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-09-16 · **Last push:** 2026-11-04
- **Found via:** queued from an earlier scan
- **Description:** Competition-aware ALS individual-tree segmentation and trait-specific selective delivery (IEEE TGRS submission): EPCO objective, training configurations, and the reliability-control and evaluation code.

### [Reza-pourali/lidar-individual-tree-segmentation](https://github.com/Reza-pourali/lidar-individual-tree-segmentation)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-09-25 · **Last push:** 2026-09-25
- **Found via:** queued from an earlier scan
- **Description:** LiDAR individual-tree segmentation with Cut Pursuit, geometric filtering, robust DBH estimation, and structural tree metrics.

### [Harry33t/treelearn-adaptive-scaling](https://github.com/Harry33t/treelearn-adaptive-scaling)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-09-16 · **Last push:** 2026-09-16
- **Found via:** queued from an earlier scan
- **Description:** Stand-density-adaptive threshold scaling for TreeLearn-style individual tree segmentation of UAV laser scanning data

### [giserhaili/SylvaSeg3D](https://github.com/giserhaili/SylvaSeg3D)

- **Stars:** 0 · **Language:** Python · **License:** Apache-2.0 · **Created:** 2026-06-17 · **Last push:** 2026-09-08
- **Found via:** queued from an earlier scan
- **Description:** A 3D deep learning framework for individual tree segmentation across complex forest scenes.

### [HPourdelan/Synthetic-Forest](https://github.com/HPourdelan/Synthetic-Forest)

- **Stars:** 0 · **Language:** Jupyter Notebook · **License:** none · **Created:** 2025-11-10 · **Last push:** 2026-07-29
- **Found via:** queued from an earlier scan
- **Description:** (ISPRS 2026) Synthetic Forest: A UAV Laser Scanning Benchmark Dataset for Individual Tree Segmentation, Classification, and Wood Volume Estimation

### [eman0706/TreeQSM-R](https://github.com/eman0706/TreeQSM-R)

- **Stars:** 0 · **Language:** R · **License:** GPL-3.0 · **Created:** 2026-10-12 · **Last push:** 2026-10-12
- **Found via:** queued from an earlier scan
- **Description:** R port of TreeQSM 2.4.1 (Raumonen et al.) for quantitative structure models of trees from point clouds, validated against the original (GNU Octave) and field diameters on under-canopy UAV-SfM clouds of an Aleppo pine stand. Research code, not an official TreeQSM release.

### [wuhaobiao8/forestry-3d](https://github.com/wuhaobiao8/forestry-3d)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-11-13 · **Last push:** 2026-11-13
- **Found via:** queued from an earlier scan; GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Smart forestry 3D point cloud platform | 智慧林业三维可视化平台 (Sentinel/LiDAR demo)

### [supervisely-ecosystem/forest-lidar-tree-annotation](https://github.com/supervisely-ecosystem/forest-lidar-tree-annotation)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-11-10 · **Last push:** 2026-11-10
- **Found via:** queued from an earlier scan; GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** A UAV LiDAR forest plot from FOR-instance, ready for labeling individual trees with 3D cuboids and point masks in the 3D point cloud editor.

### [gunduzosman/qgis-treecloud](https://github.com/gunduzosman/qgis-treecloud)

- **Stars:** 0 · **Language:** unknown · **License:** GPL-2.0 · **Created:** 2026-11-06 · **Last push:** 2026-11-06
- **Found via:** queued from an earlier scan
- **Description:** QGIS plugin for tree detection and forest inventory from TLS/ALS point clouds.

### [19991014/SODS-registration](https://github.com/19991014/SODS-registration)

- **Stars:** 0 · **Language:** C++ · **License:** none · **Created:** 2026-11-04 · **Last push:** 2026-11-05
- **Found via:** queued from an earlier scan
- **Description:** Multisource forest point cloud registration with semantic-guided keypoints and robust RANSAC mechanisms

### [Lakshya-Samraik/-NZ-LiDAR-Forestry-Deep-Learning](https://github.com/Lakshya-Samraik/-NZ-LiDAR-Forestry-Deep-Learning)

- **Stars:** 0 · **Language:** unknown · **License:** MIT · **Created:** 2026-11-02 · **Last push:** 2026-11-02
- **Found via:** queued from an earlier scan
- **Description:** Automated forestry analytics and canopy extraction pipeline utilizing high-resolution airborne LiDAR data and deep learning point cloud segmentation in ArcGIS Pro

### [msuarezrubio/forest_FHD_openness](https://github.com/msuarezrubio/forest_FHD_openness)

- **Stars:** 0 · **Language:** R · **License:** MIT · **Created:** 2026-10-30 · **Last push:** 2026-10-30
- **Found via:** queued from an earlier scan
- **Description:** Function to derive below-canopy openness and foliage height diversity (FHD) from mobile laser scanning point clouds.

### [EsiSeguwa/finnish-forest-lidar-analysis](https://github.com/EsiSeguwa/finnish-forest-lidar-analysis)

- **Stars:** 0 · **Language:** R · **License:** none · **Created:** 2026-10-18 · **Last push:** 2026-10-18
- **Found via:** queued from an earlier scan
- **Description:** Reproducible exploratory analysis of a Finnish forest point cloud using R and lidR.

### [EmilieVautier/LiS2Forest](https://github.com/EmilieVautier/LiS2Forest)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-10-14 · **Last push:** 2026-10-14
- **Found via:** queued from an earlier scan
- **Description:** FLORA and FLORA_S2: deep learning models for predicting forest structural attributes from airborne LiDAR HD point clouds and Sentinel-2 time series. Code for the LiS2Forest benchmark (REO @ NeurIPS 2026).

### [3dTrees-earth/3dtrees_foreststructure](https://github.com/3dTrees-earth/3dtrees_foreststructure)

- **Stars:** 0 · **Language:** R · **License:** GPL-3.0 · **Created:** 2026-07-20 · **Last push:** 2026-10-15
- **Found via:** queued from an earlier scan
- **Description:** Dockerized forest-structure indices for audited 3D point clouds

### [glaucojrcarvalho/multimodal-forest-explorer](https://github.com/glaucojrcarvalho/multimodal-forest-explorer)

- **Stars:** 0 · **Language:** TypeScript · **License:** MIT · **Created:** 2026-10-07 · **Last push:** 2026-10-08
- **Found via:** queued from an earlier scan
- **Description:** Interactive research prototype for real forest LiDAR point clouds, tree-level analysis, and reproducible forestry AI research.

### [georgewoolsey/cloud2trees_species_validation](https://github.com/georgewoolsey/cloud2trees_species_validation)

- **Stars:** 0 · **Language:** R · **License:** GPL-3.0 · **Created:** 2026-07-06 · **Last push:** 2026-11-03
- **Found via:** queued from an earlier scan
- **Description:** Validating a tree species classification workflow that integrates individual tree detections from aerial point clouds within the cloud2trees framework with the USFS TreeMap product to attach species attributes to single-tree forest inventories.

### [lfxu1/inverse3D](https://github.com/lfxu1/inverse3D)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-08-29 · **Last push:** 2026-08-30
- **Found via:** queued from an earlier scan
- **Description:** From static point clouds to time-varying L-systems: Skeleton-driven inverse modeling of tree growth dynamics

### [7kamuraNu/SkeletonGM](https://github.com/7kamuraNu/SkeletonGM)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-04-16 · **Last push:** 2026-11-09
- **Found via:** queued from an earlier scan; GitHub "tree skeleton point cloud" (pushed)
- **Description:** While LiDAR-based 3D modeling can reflect tree architecture, generating reliable models from dense foliage point clouds has remained difficult. To address this challenge, we developed the Skeleton Generative Method (SkeletonGM), which reconstructs tree trunks and primary branches from mobile laser scanning data even under heavy foliation.

### [band72/lidar-historic-trees](https://github.com/band72/lidar-historic-trees)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-11-15 · **Last push:** 2026-11-17
- **Found via:** queued from an earlier scan; GitHub "forest inventory lidar" (created); GitHub "forest inventory lidar" (pushed)
- **Description:** LiDAR tree inventory: find trees, fit stems, DBH with confidence intervals; CSV/DXF export; plugin system; web app. Based on PRBonn/forest_inventory_pipeline.

### [UBC-FRESH/fresh-urban-forest-lab](https://github.com/UBC-FRESH/fresh-urban-forest-lab)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-11-03 · **Last push:** 2026-11-16
- **Found via:** queued from an earlier scan; GitHub "forest inventory lidar" (pushed)
- **Description:** Open urban-forest LiDAR, tree-inventory, growth, and 2D/3D decision-support lab (UBC pilot)

### [7ao6688-hash/new-forest-lidar-inventory](https://github.com/7ao6688-hash/new-forest-lidar-inventory)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-09-08 · **Last push:** 2026-09-08
- **Found via:** queued from an earlier scan
- **Description:** Reproducible LiDAR forest-inventory workflow for canopy-height metrics, uncertainty-aware stand screening and decision-ready reporting.

### [ruoppa/scatr_its](https://github.com/ruoppa/scatr_its)

- **Stars:** 0 · **Language:** Python · **License:** MIT · **Created:** 2026-11-19 · **Last push:** 2026-11-23
- **Found via:** arXiv paper; arXiv: SCATR-ITS: a scalable transformer for large-area individual tree segmentation…
- **Paper:** [SCATR-ITS: a scalable transformer for large-area individual tree segmentation from LiDAR point clouds](https://arxiv.org/abs/2611.26715) (arXiv, 2026; paper abstract links to this repo)

### [ChiGuadecha/Terrestrial-Laser-Scanning-TreePartSeg](https://github.com/ChiGuadecha/Terrestrial-Laser-Scanning-TreePartSeg)

- **Stars:** 0 · **Language:** Python · **License:** NOASSERTION · **Created:** 2026-11-20 · **Last push:** 2026-11-20
- **Found via:** GitHub "terrestrial laser scanning tree" (created); GitHub "terrestrial laser scanning tree" (pushed)
- **Description:** TreePartSeg segments single-tree TLS point clouds into trunk, branch and leaf with Point Transformer V3, geometry-driven pseudo-labels and structure-aware post-processing. It keeps the trunk continuous and recovers fine twigs: mIoU 0.920, OA 0.968, macro-F1 0.957; recalls 0.981 leaf / 0.887 branch / 0.991 trunk / 0.967 twigs.

### [SebEyes/Azorean_forests_height](https://github.com/SebEyes/Azorean_forests_height)

- **Stars:** 0 · **Language:** HTML · **License:** none · **Created:** 2026-11-17 · **Last push:** 2026-11-22
- **Found via:** GitHub "forest point cloud" (created); GitHub "forest point cloud" (pushed)
- **Description:** Julia workflows for deriving and filtering 1 m Azorean forest vegetation-height rasters from classified aerial LiDAR point clouds.

### [georgewoolsey/case_studies_cloud2trees](https://github.com/georgewoolsey/case_studies_cloud2trees)

- **Stars:** 0 · **Language:** TeX · **License:** GPL-3.0 · **Created:** 2026-05-26 · **Last push:** 2026-11-20
- **Found via:** GitHub "forest point cloud" (pushed)
- **Description:** Demonstrating point cloud processing workflows with cloud2trees to generate forest inventory tree lists. Case studies for generating inputs for QUIC-fire prescribed burn planning and generating ICO silvicultural thinning treatments.

### [igorpawelec/cacumen](https://github.com/igorpawelec/cacumen)

- **Stars:** 0 · **Language:** Python · **License:** GPL-3.0 · **Created:** 2026-11-20 · **Last push:** 2026-11-23
- **Found via:** GitHub "canopy height model individual tree" (created); GitHub "canopy height model individual tree" (pushed)
- **Description:** Individual tree crown delineation from canopy height models by Hierarchical Region Growing, in Python and R.

## Low relevance, not drafted (2)

Matched a search but not the tree + LiDAR/point-cloud keyword check. Reported once.

### [jingayaozhao/TAIP](https://github.com/jingayaozhao/TAIP)

- **Stars:** 0 · **Language:** Python · **License:** none · **Created:** 2026-11-20 · **Last push:** 2026-11-20
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** Trunk-Axis-Inversion-Based Partitioning for Individual Tree Segmentation

### [Sunspark888/CrownRoute-overview](https://github.com/Sunspark888/CrownRoute-overview)

- **Stars:** 0 · **Language:** unknown · **License:** none · **Created:** 2026-11-19 · **Last push:** 2026-11-19
- **Found via:** GitHub "individual tree segmentation" (created); GitHub "individual tree segmentation" (pushed)
- **Description:** CrownRoute paper overview: box-supervised instance segmentation of individual litchi tree crowns in UAV imagery.

## Recent papers without linked code (15)

The catalog needs a code repository, so these aren't drafted. Worth checking whether code
was released elsewhere (paper's data-availability section, author pages, Zenodo).

- [TCMFE-Net for robust tree species identification from terrestrial and personal laser scanning data: the impact of feature fusion and sampling strategies](https://doi.org/10.1080/22797254.2026.2761686) — Cheng et al., European Journal of Remote Sensing (2026-11-16)
- [Organ-Specific Biomass Estimation in Apple Orchards Using Terrestrial Laser Scanning and Soil Property Correlation](https://doi.org/10.15835/buasvmcn-agr:2025.0010) — BURA et al., Bulletin of University of Agricultural Sciences and Veterinary Medicine Cluj-Napoca. Agriculture (2026-11-15)
- [A novel 3D canopy competition index for understanding tree growth: Insights from aerial laser scanning](https://doi.org/10.1016/j.rse.2026.115754) — Liu et al., Remote Sensing of Environment (2027-01)
- [Erratum to “Quantification of hygroscopic dead branch movement on boreal forest trees using permanent terrestrial laser scanning” [Agricultural and Forest Meteorology 390 (2026) 111444]](https://doi.org/10.1016/j.agrformet.2026.111500) — Guthier et al., Agricultural and Forest Meteorology (2027-01)
- [A double-constrained convex hull approach for tree crown volume estimation: A mobile laser scanning case study of Catalpa bungei](https://doi.org/10.1016/j.fecs.2026.100545) — Yao et al., Forest Ecosystems (2026-12)
- [Automated tree segmentation for scalable terrestrial laser scanning-based biomass reference data: assessment of volumetric and allometric approaches](https://doi.org/10.1016/j.srs.2026.100538) — Cherlet et al., Science of Remote Sensing (2026-12)
- [Individual tree segmentation from terrestrial LiDAR: Benchmarking and forest structural analysis](https://doi.org/10.1016/j.isprsjprs.2026.11.002) — Kulicki et al., ISPRS Journal of Photogrammetry and Remote Sensing (2027-01)
- [Automatic inventory of orchards and tree species classification using UAV-LiDAR point clouds](https://doi.org/10.1016/j.measurement.2026.123377) — Hadas et al., Measurement (2026-12)
- [PointBALNet: A Deep Learning Framework for Soybean 3D Point Cloud Branching Point Segmentation Combining Label-Balanced Sampling and Asymmetric Loss](https://doi.org/10.3390/agriculture16222554) — Li et al., Agriculture (2026-11-19)
- [Real-time semantic segmentation of orchard LiDAR point clouds with a spherical-image convolutional neural network](https://doi.org/10.1016/j.compag.2026.112634) — Li et al., Computers and Electronics in Agriculture (2027-02)
- [Frozen 2D Foundation-Model Features Cluster Tree Species in LiDAR Point Clouds More Coherently than the Evaluated Geometric Descriptors: a Source-Controlled Evaluation](https://doi.org/10.1007/s41064-026-00427-5) — Zhou, PFG – Journal of Photogrammetry, Remote Sensing and Geoinformation Science (2026-11-20)
- [Estimating aboveground biomass of Pinus tabuliformis using UAV-LiDAR at the site scale: A comparison of individual tree detection and diameter distribution approaches](https://doi.org/10.1016/j.foreco.2026.124406) — Sun et al., Forest Ecology and Management (2027-01)
- [PFL-Net: a deep learning network for maize leaf point cloud completion](https://doi.org/10.1016/j.atech.2026.102667) — Wu et al., Smart Agricultural Technology (2026-12)
- [High-precision cotton leaf area index and boll trait estimation using UAV multiview imaging and 3D point cloud fusion](https://doi.org/10.1016/j.compag.2026.112666) — Wu et al., Computers and Electronics in Agriculture (2027-02)
- [Experiments with height-diameter models for urban trees using drone LiDAR](https://doi.org/10.1016/j.ufug.2026.129762) — Zhao et al., Urban Forestry &amp; Urban Greening (2027-01)
