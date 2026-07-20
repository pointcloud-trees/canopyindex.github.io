# New method candidates (scan: 2026-07-20)

Automated weekly scan of GitHub for repos matching LiDAR tree-structure keywords
that aren't currently in `src/lib/methods.ts`.

**This list is unverified.** Do not copy a license, author name, or paper DOI from
here straight into the catalog. Before adding any entry to `methods.ts`:
- Confirm the repo is real, maintained, and matches the stated description.
- Check the license in the repo itself (search-result metadata can be wrong or missing).
- Find the correct paper via Crossref/the repo's README — never guess a DOI.
- Verify author names against the paper or package metadata — never invent one.

40 candidates found.

## [SmartForest-no/ForestFormer3D](https://github.com/SmartForest-no/ForestFormer3D)

- **Stars:** 110 · **Language:** Python · **License:** NOASSERTION · **Updated:** 2026-07-19
- **Matched query:** `forest point cloud segmentation`
- **Description:** Official implementation of the ICCV 2025 paper:  "ForestFormer3D: A Unified Framework for End-to-End Segmentation of Forest LiDAR 3D Point Clouds"

## [VUKOZ-OEL/3d-forest](https://github.com/VUKOZ-OEL/3d-forest)

- **Stars:** 90 · **Language:** C++ · **License:** GPL-3.0 · **Updated:** 2026-06-26
- **Matched query:** `point cloud tree segmentation`
- **Description:** Visualization, processing and analysis of Lidar point clouds, mainly focused on forest environment. New version of 3D Forest. Process files with terabytes of data. Edit new point attributes. Simple addition of new features by plugins.

## [akhilthomas17/pointcloud-landmarks-extractor](https://github.com/akhilthomas17/pointcloud-landmarks-extractor)

- **Stars:** 86 · **Language:** C++ · **License:** MIT · **Updated:** 2026-03-01
- **Matched query:** `point cloud tree segmentation`
- **Description:** Tools to detect and classify landmarks (currently, trees and pole-like objects) from point cloud data

## [sining1989/PointCloudTools](https://github.com/sining1989/PointCloudTools)

- **Stars:** 84 · **Language:** C++ · **License:** none · **Updated:** 2026-06-23
- **Matched query:** `point cloud tree segmentation`
- **Description:** PointCloudTools是一款在Windows平台基于VS2017、Qt5.9.5、PCL1.8.1、VTK8.0.0源码编译开发的专门处理点云（.pcd、.ply、.obj等格式）文件的可视化工具。 该工具点云可视化使用的是vtk8.0.0编译生成的QVTKWidget窗口控件，使用PCL可以对点云进行滤波(filter)、特征提取(features)、关键点(keypoint)、 分割(segmentation)、识别(recognition)、可视化(visualization)等操作，可以对所有点云进行WGS84到平面坐标系转换，也包含将经纬度坐标转为UTM坐标的方法。 下载64位PCL1.8.164位下载路径：https://github.com/PointCloudLibrary/pcl/releases或http://unanancyowen.com/en/pcl181 PCL1.8.1对应的VTK版本为8.0.0，下载地址：https://gitlab.kitware.com/vtk/vtk/tree/v8.0.0

## [yurithefury/ForestMetrics](https://github.com/yurithefury/ForestMetrics)

- **Stars:** 71 · **Language:** C++ · **License:** GPL-3.0 · **Updated:** 2026-07-08
- **Matched query:** `point cloud tree segmentation`
- **Description:** Individual tree segmentation from LiDAR-derived point clouds

## [GuangpengFan/AdQSM](https://github.com/GuangpengFan/AdQSM)

- **Stars:** 65 · **Language:** GLSL · **License:** none · **Updated:** 2026-07-17
- **Matched query:** `lidar tree structure`
- **Description:** AdQSM is a new tree quantitative structure model (QSM) that can reconstruct the 3D branch geometry of individual tree from Terrestrial Laser Scanning (TLS) point clouds. Many attributes of the trunk or branch can also be quantitatively calculated (as shown in the table below). For example, tree volume (trunk and branch), DBH and tree height parameters can be extracted directly. It allows point clouds collected by different sensors to serve as input point clouds. In addition to TLS, UAV LiDAR, mobile LiDAR, SLAM and even photogrammetry are also included under the premise of appropriate point cloud density.

## [juanb09111/FinnForest](https://github.com/juanb09111/FinnForest)

- **Stars:** 62 · **Language:** unknown · **License:** none · **Updated:** 2026-06-03
- **Matched query:** `forest point cloud segmentation`
- **Description:**  This paper introduces a forest dataset called FinnWoodlands, which consists of RGB stereo images, point clouds, and sparse depth maps, as well as ground truth manual annotations for semantic, instance, and panoptic segmentation

## [uc-vision/smart-tree](https://github.com/uc-vision/smart-tree)

- **Stars:** 51 · **Language:** Python · **License:** MIT · **Updated:** 2026-07-16
- **Matched query:** `tree skeleton point cloud`
- **Description:** Neural Medial Axis Approximation of Point Clouds for 3D Tree Skeletonization

## [umr-amap/aRchi](https://github.com/umr-amap/aRchi)

- **Stars:** 40 · **Language:** R · **License:** none · **Updated:** 2026-06-01
- **Matched query:** `terrestrial laser scanning tree`
- **Description:** R package aRchi. Tree architecture from terrestrial laser scanning (TLS) data

## [ai4trees/pointtree](https://github.com/ai4trees/pointtree)

- **Stars:** 33 · **Language:** Python · **License:** MIT · **Updated:** 2026-07-10
- **Matched query:** `point cloud tree segmentation`
- **Description:** A Python Package for Tree Instance Segmentation in 3D Point Clouds.

## [limingado/NSC](https://github.com/limingado/NSC)

- **Stars:** 29 · **Language:** Python · **License:** none · **Updated:** 2025-10-04
- **Matched query:** `point cloud tree segmentation`
- **Description:** The code is an implementation of the Nystrӧm-based spectral clustering with the K-nearest neighbour-based sampling (KNNS) method (Pang et al. 2021). It is aimed for individual tree segmentation using airborne LiDAR point cloud data.   When using the code, please cite as:  Yong Pang, Weiwei Wang, Liming Du, Zhongjun Zhang, Xiaojun Liang, Yongning Li, Zuyuan Wang (2021) Nystrӧm-based spectral clustering using airborne LiDAR point cloud data for individual tree segmentation, International Journal of Digital Earth  Code files:  ‘segmentation.py’: the main function, including deriving local maximum from Canopy Height Model (CHM); ‘VNSC.py’: other functions for the algorithm, including mean-shift voxelization, similarity graph construction, KNNS sampling, eigendecomposition, k-means clustering, as well as the computation and writing of individual tree parameters.  Key parameters: When using the code, users can adjust the values of local maximum window, gap (the upper limit of the number of final clusters), knn (the number of k-nearest neighbours in the similarity graph) and quantile in meanshift method based specific data characteristics. Currently, the value of local maximum window is 3m ×3m, the value of gap is defined as the 1.5 times of the local maximum detected from CHM. Parameter knn can be defined as a constant value (40 in the code) based on the data characteristics, or be determined through the relationship between it and the number of voxels. The default setting of quantile in meanshift method is the average density of point clouds. More details can be found in Pang et al. (2021).  Test data: ‘ALS_pointclouds.txt’: point cloud data; ‘ALS_CHM.tif’: CHM of the point cloud data; ‘Reference_tree.csv’: field measurements for algorithm validation. The position was measured using differential GNSS. The tree height of each tree in this file is obtained by regression estimation.  Outputs: ‘Data_seg.csv’: coordinate of each point (x, y, z) as well as its cluster label after segmentation; ‘Parameter.csv’: individual tree parameters (TreeID, Position_X, Position_Y, Crown, Height) based on the calculation described in Pang et al. (2021).

## [JulFrey/CspStandSegmentation](https://github.com/JulFrey/CspStandSegmentation)

- **Stars:** 26 · **Language:** R · **License:** GPL-3.0 · **Updated:** 2026-06-30
- **Matched query:** `point cloud tree segmentation`
- **Description:** R package for single tree delination from TLS/MLS/ULS point clouds

## [rachit-ranjan16/CrownSeg](https://github.com/rachit-ranjan16/CrownSeg)

- **Stars:** 26 · **Language:** Python · **License:** GPL-3.0 · **Updated:** 2026-04-13
- **Matched query:** `tree crown segmentation lidar`
- **Description:** Tree Crown Image Segmentation through Clustering with RGB, Hyperspectral and LiDAR as inputs

## [liyi-rs/ITS_WS_ICCE](https://github.com/liyi-rs/ITS_WS_ICCE)

- **Stars:** 18 · **Language:** MATLAB · **License:** none · **Updated:** 2026-06-30
- **Matched query:** `point cloud tree segmentation`
- **Description:** ITS_WS_ICCE is used to individual tree segmentation from airborne or UAV LiDAR point clouds combining the watershed and  improved connection center evolution clustering.

## [truebelief/cc-treeiso-plugin](https://github.com/truebelief/cc-treeiso-plugin)

- **Stars:** 18 · **Language:** C++ · **License:** GPL-3.0 · **Updated:** 2026-01-08
- **Matched query:** `terrestrial laser scanning tree`
- **Description:** Individual-tree isolation (treeiso) from terrestrial laser scanning

## [lostagex/skeleton_extraction](https://github.com/lostagex/skeleton_extraction)

- **Stars:** 18 · **Language:** MATLAB · **License:** none · **Updated:** 2025-11-13
- **Matched query:** `tree skeleton point cloud`
- **Description:** Codes for skeleton extraction from point clouds. Created by Xin Li

## [Elephant-C/tree-crown-based-assessment](https://github.com/Elephant-C/tree-crown-based-assessment)

- **Stars:** 17 · **Language:** Python · **License:** MIT · **Updated:** 2026-05-11
- **Matched query:** `tree crown segmentation lidar`
- **Description:** Tree crown polygon-based assessment for airborne LiDAR data individual tree segmentation inter-comparison

## [wbx1727031/WoodSKE](https://github.com/wbx1727031/WoodSKE)

- **Stars:** 16 · **Language:** Python · **License:** MIT · **Updated:** 2026-03-16
- **Matched query:** `tree skeleton point cloud`
- **Description:** An algorithm to extract skeletons from discrete point clouds of tree branches collected by terrestrial laser scanners

## [jl626/MCRC](https://github.com/jl626/MCRC)

- **Stars:** 12 · **Language:** C++ · **License:** GPL-3.0 · **Updated:** 2025-03-13
- **Matched query:** `tree crown segmentation lidar`
- **Description:** Automatic tree delineation from LiDAR point couds

## [anditockner/treeX](https://github.com/anditockner/treeX)

- **Stars:** 11 · **Language:** R · **License:** GPL-3.0 · **Updated:** 2026-07-16
- **Matched query:** `individual tree detection lidar`
- **Description:** Package for individual tree detection and tree segmentation from ground-based LiDAR data

## [ruoppa/GrowSP-ForMS](https://github.com/ruoppa/GrowSP-ForMS)

- **Stars:** 11 · **Language:** Python · **License:** MIT · **Updated:** 2026-05-16
- **Matched query:** `forest point cloud segmentation`
- **Description:** Official implementation of the ISPRS Journal of Photogrammetry and Remote Sensing paper: "Unsupervised deep learning for semantic segmentation of multispectral LiDAR forest point clouds"

## [juliacarr/forest](https://github.com/juliacarr/forest)

- **Stars:** 10 · **Language:** Python · **License:** none · **Updated:** 2024-08-29
- **Matched query:** `forest point cloud segmentation`
- **Description:** This is the supplementary code for Carr and Slyder 2017 (submitted to International Journal of Remote Sensing), "Individual tree segmentation from a leaf-off photogrammetric point cloud"

## [mac999/scan_to_model_pipeline](https://github.com/mac999/scan_to_model_pipeline)

- **Stars:** 8 · **Language:** Python · **License:** MIT · **Updated:** 2026-07-17
- **Matched query:** `lidar tree structure`
- **Description:** The scan to model pipeline (SMP) is an open source tool that automatically generates mesh model files (PLY) by filtering and clustering data in LAS, a point cloud format. Using this, you can automate the extraction of buildings, ground, and trees from PCD. It is structured as a pipeline, so you can easily adjust parameters for each data processing

## [HaroldMurcia/miniRover_LiDAR_citrush_crop](https://github.com/HaroldMurcia/miniRover_LiDAR_citrush_crop)

- **Stars:** 8 · **Language:** Python · **License:** none · **Updated:** 2025-10-02
- **Matched query:** `individual tree detection lidar`
- **Description:** Growing evaluation in the early stages of crop development can be critical to eventual yield. Point clouds have been used for this purpose in tasks such as detection, characterization, phenotyping, and prediction on different crops with terrestrial mapping platforms based on laser scanning. 3D model generation requires the use of specialized measurement equipment, which limits access to this technology because of their complex and high cost, both hardware elements and data processing software. An unmanned 3D reconstruction mapping system of orchards or small crops has been developed to support the  determination of morphological indices, allowing the individual calculation of the height and radius of the canopy of the trees to monitor plant growth. This paper presents the details on each development stage of a low-cost mapping system, which integrates an Unmanned Ground Vehicle UGV and a 2D LiDAR to generate 3D point clouds. The sensing system for the data collection was developed from the design in mechanical, electronic, control, and software layers. The validation test was carried out on a citrus crop section by a comparison of distance and canopy height values obtained from our generated point cloud concerning the reference values obtained with a photogrammetry method.

## [hargrove-lab/QSAR](https://github.com/hargrove-lab/QSAR)

- **Stars:** 8 · **Language:** R · **License:** none · **Updated:** 2025-02-11
- **Matched query:** `quantitative structure model tree`
- **Description:** The diversity of RNA structural elements and their documented role in human diseases make RNA an attractive therapeutic target. However, progress in drug discovery and development has been hindered by challenges in the determination of high-resolution RNA structures and a limited understanding of the parameters that drive RNA recognition by small molecules, including a lack of validated quantitative structure-activity relationships (QSAR). Herein, we developed QSAR models that quantitatively predict both thermodynamic and kinetic-based binding parameters of small molecules and the HIV-1 TAR model system. Small molecules bearing diverse scaffolds was screened against the HIV-1 TAR using surface plasmon resonance. Then multiple linear regression (MLR) combined with feature selection was performed to afford robust models that allowed direct interpretation of properties critical for both binding strength and kinetic rate constants. These models were externally validated with new molecules and their accurate performance confirmed via comparison to ensemble tree methods. 

## [Blecigne/lidUrb](https://github.com/Blecigne/lidUrb)

- **Stars:** 8 · **Language:** R · **License:** GPL-3.0 · **Updated:** 2025-04-25
- **Matched query:** `terrestrial laser scanning tree`
- **Description:** Urban trees analyses from terrestrial laser scanning

## [TobyDJackson/TreeQSM_Architecture](https://github.com/TobyDJackson/TreeQSM_Architecture)

- **Stars:** 7 · **Language:** MATLAB · **License:** none · **Updated:** 2024-06-26
- **Matched query:** `TLS QSM`
- **Description:** Functions to extract architectural measures from 3D models of trees based on TLS data

## [Putaonjfu/WDTS](https://github.com/Putaonjfu/WDTS)

- **Stars:** 6 · **Language:** Python · **License:** none · **Updated:** 2026-06-16
- **Matched query:** `terrestrial laser scanning tree`
- **Description:** WDTS: Water Droplet Model-Driven Entropy Optimization for Individual Tree Skeletonization from Terrestrial Laser Scanning Point Clouds

## [julesmorel/PointNet2](https://github.com/julesmorel/PointNet2)

- **Stars:** 6 · **Language:** Python · **License:** none · **Updated:** 2026-06-15
- **Matched query:** `forest point cloud segmentation`
- **Description:** Processing pipeline designed to segment point clouds acquired in forests

## [adoosth/tree_segmentation](https://github.com/adoosth/tree_segmentation)

- **Stars:** 6 · **Language:** Jupyter Notebook · **License:** none · **Updated:** 2026-03-10
- **Matched query:** `forest point cloud segmentation`
- **Description:** Master thesis project. Segmentation of trees in forest point clouds.

## [uc-vision/synthetic-trees-II](https://github.com/uc-vision/synthetic-trees-II)

- **Stars:** 6 · **Language:** Python · **License:** GPL-3.0 · **Updated:** 2026-01-21
- **Matched query:** `tree skeleton point cloud`
- **Description:** Synthetic tree point cloud dataset with ground truth skeletons.

## [MillikanForester/lidar_itd](https://github.com/MillikanForester/lidar_itd)

- **Stars:** 4 · **Language:** Python · **License:** none · **Updated:** 2024-11-24
- **Matched query:** `individual tree detection lidar`
- **Description:** R scripts for LiDAR point-cloud individual tree detection and crown delineation

## [YuchenGUOGYC/Tree-segmetation-code-offered-by-Hamraz-](https://github.com/YuchenGUOGYC/Tree-segmetation-code-offered-by-Hamraz-)

- **Stars:** 4 · **Language:** Jupyter Notebook · **License:** none · **Updated:** 2023-07-29
- **Matched query:** `terrestrial laser scanning tree`
- **Description:** This code to the main processing of  dessertation "Combining LiDAR and Allometric/Volumetric Equations to estimate Above Ground Biomass from an Airborne LiDAR Scanning Model converted by Terrestrial Laser Scanning Point Cloud  "

## [meyerls/CherryPicker](https://github.com/meyerls/CherryPicker)

- **Stars:** 4 · **Language:** HTML · **License:** none · **Updated:** 2025-09-18
- **Matched query:** `tree skeleton point cloud`
- **Description:** Website - Automatic reconstruction of cherry trees and semantic skeletonization of point clouds

## [pingyangtiaer/HydroLiDAR](https://github.com/pingyangtiaer/HydroLiDAR)

- **Stars:** 3 · **Language:** C# · **License:** GPL-3.0 · **Updated:** 2025-12-23
- **Matched query:** `lidar tree structure`
- **Description:** A new algorithm and associated software tools are presented for the purpose of extracting watershed hydrography directly from light detection and ranging (LiDAR) data. LiDAR data are typified by high density point measurements of terrain. The current state of the science requires that terrain data be discretized into a regularly spaced raster grid of elevations before watershed and hydrologic analysis can be executed. Areas of high terrain variability or roughness can become smoothed over in the process, effectively removing potentially valuable information. Resulting hydrographic data sets (e.g. watershed boundaries and stream networks) are used extensively in environmental modeling systems but are flawed from the outset by the smoothing process used to convert LiDAR points into raster grids. The algorithm presented here employs a K-D tree data structure that facilitates rapid neighborhood searches within the LiDAR data cloud. This is a critical component given the extremely large size of typical LiDAR datasets (often in the millions to billions of points). An outlet based nearest neighbor tree uphill-climbing downhill-pruning (UCDP) methodology is then engaged to create a flow network through the point cloud. From this flow network, watershed boundaries, pits or sinks, upstream areas, and stream networks can all be derived. The methodology is encoded as a plug-in for the MapWindow GIS software and tested on a number of LiDAR datasets. 

## [mattbv/treemetrics](https://github.com/mattbv/treemetrics)

- **Stars:** 2 · **Language:** Python · **License:** none · **Updated:** 2020-11-08
- **Matched query:** `TLS QSM`

## [sapto7777/TreeDetection](https://github.com/sapto7777/TreeDetection)

- **Stars:** 2 · **Language:** R · **License:** none · **Updated:** 2023-09-16
- **Matched query:** `individual tree detection lidar`
- **Description:** Use of DBSCAN to identify individual trees from a LiDAR point cloud

## [wischmcj/pyQSM](https://github.com/wischmcj/pyQSM)

- **Stars:** 1 · **Language:** Python · **License:** MPL-2.0 · **Updated:** 2026-04-24
- **Matched query:** `TLS QSM`
- **Description:** (WIP) A python library for processessing TLS lidar scans; producing triangular and tetra-meshes for the application of raytracing and prediction of environmental conditions

## [Titilayor547/IndividualTreeModelingfromLIDAR](https://github.com/Titilayor547/IndividualTreeModelingfromLIDAR)

- **Stars:** 1 · **Language:** unknown · **License:** none · **Updated:** 2023-12-15
- **Matched query:** `individual tree detection lidar`
- **Description:** Creating, DTM, DEM, DSM, Tree detection and Identification from LiDAR point cloud

## [jvrapp/LiDAR_Individual_Tree_Detection](https://github.com/jvrapp/LiDAR_Individual_Tree_Detection)

- **Stars:** 1 · **Language:** Jupyter Notebook · **License:** none · **Updated:** 2023-06-01
- **Matched query:** `individual tree detection lidar`
