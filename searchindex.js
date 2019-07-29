Search.setIndex({envversion:46,filenames:["api/index","api/modules/src/AdjListHyperGraph","api/modules/src/AggregationBuffer","api/modules/src/BinReader","api/modules/src/Butterfly","api/modules/src/CHGL","api/modules/src/CHGL-Server","api/modules/src/DynamicAggregationBuffer","api/modules/src/EquivalenceClasses","api/modules/src/ExplicitString","api/modules/src/Generation","api/modules/src/Graph","api/modules/src/Metrics","api/modules/src/Privatization","api/modules/src/PropertyMaps","api/modules/src/TerminationDetection","api/modules/src/Traversal","api/modules/src/UnrolledLinkedList","api/modules/src/Utilities","api/modules/src/Vectors","api/modules/src/Visualize","api/modules/src/WorkQueue","example/index","example/modules/example/activeDNS","example/modules/example/graphs","index","quickstart"],objects:{"":{"CHGL-Server":[6,0,0,"-"],AdjListHyperGraph:[1,0,0,"-"],AggregationBuffer:[2,0,0,"-"],BinReader:[3,0,0,"-"],Butterfly:[4,0,0,"-"],CHGL:[5,0,0,"-"],DynamicAggregationBuffer:[7,0,0,"-"],EquivalenceClasses:[8,0,0,"-"],ExplicitString:[9,0,0,"-"],Generation:[10,0,0,"-"],Graph:[11,0,0,"-"],Metrics:[12,0,0,"-"],Privatization:[13,0,0,"-"],PropertyMaps:[14,0,0,"-"],TerminationDetection:[15,0,0,"-"],Traversal:[16,0,0,"-"],UnrolledLinkedList:[17,0,0,"-"],Utilities:[18,0,0,"-"],Vectors:[19,0,0,"-"],Visualize:[20,0,0,"-"],WorkQueue:[21,0,0,"-"],activeDNS:[23,0,0,"-"],graphs:[24,0,0,"-"]},"AdjListHyperGraph.AdjListHyperGraph":{destroy:[1,2,1,""],init:[1,2,1,""]},"AdjListHyperGraph.AdjListHyperGraphImpl":{"this":[1,2,1,""],addInclusion:[1,2,1,""],addInclusionBuffered:[1,2,1,""],collapse:[1,2,1,""],collapseEdges:[1,2,1,""],collapseSubsets:[1,2,1,""],collapseVertices:[1,2,1,""],degree:[1,2,1,""],eDescType:[1,3,1,""],eIndexType:[1,3,1,""],edgesDomain:[1,2,1,""],flushBuffers:[1,2,1,""],getEdgeDegrees:[1,2,1,""],getEdges:[1,2,1,""],getInclusions:[1,2,1,""],getLocale:[1,2,1,""],getProperty:[1,2,1,""],getToplexes:[1,7,1,""],getVertexDegrees:[1,2,1,""],getVertices:[1,7,1,""],hasInclusion:[1,2,1,""],incidence:[1,7,1,""],intersection:[1,7,1,""],intersectionSize:[1,2,1,""],isConnected:[1,2,1,""],numEdges:[1,2,1,""],numVertices:[1,2,1,""],removeDuplicates:[1,2,1,""],removeIsolatedComponents:[1,2,1,""],startAggregation:[1,2,1,""],stopAggregation:[1,2,1,""],these:[1,7,1,""],toEdge:[1,2,1,""],toVertex:[1,2,1,""],vDescType:[1,3,1,""],vIndexType:[1,3,1,""],verticesDomain:[1,2,1,""],walk:[1,7,1,""]},"AdjListHyperGraph.Wrapper":{"null":[1,2,1,""],id:[1,3,1,""],idType:[1,3,1,""],nodeType:[1,3,1,""],readWriteThis:[1,2,1,""]},"AggregationBuffer.Aggregator":{"_value":[2,2,1,""],destroy:[2,2,1,""],init:[2,2,1,""],instance:[2,3,1,""],isInitialized:[2,2,1,""],msgType:[2,3,1,""],pid:[2,3,1,""]},"AggregationBuffer.AggregatorImpl":{aggregate:[2,2,1,""],deinit:[2,2,1,""],dsiGetPrivatizeData:[2,2,1,""],dsiPrivatize:[2,2,1,""],flushGlobal:[2,7,1,""],flushLocal:[2,7,1,""],getPrivatizedInstance:[2,2,1,""],init:[2,2,1,""],msgType:[2,3,1,""],size:[2,2,1,""],sizeGlobal:[2,2,1,""]},"AggregationBuffer.Buffer":{"this":[2,2,1,""],cap:[2,2,1,""],done:[2,2,1,""],getArray:[2,2,1,""],getDomain:[2,2,1,""],getPtr:[2,2,1,""],msgType:[2,3,1,""],readWriteThis:[2,2,1,""],size:[2,2,1,""],these:[2,7,1,""]},"Butterfly.AdjListHyperGraphImpl":{areAdjacentVertices:[4,2,1,""],edgesWithDegree:[4,7,1,""],getAdjacentVertices:[4,7,1,""],getEdgeButterflies:[4,2,1,""],getEdgeCaterpillars:[4,2,1,""],getEdgeMetamorphCoefs:[4,2,1,""],getEdgePerDegreeMetamorphosisCoefficients:[4,2,1,""],getInclusionMetamorphCoef:[4,2,1,""],getInclusionNumButterflies:[4,2,1,""],getInclusionNumCaterpillars:[4,2,1,""],getVertexButterflies:[4,2,1,""],getVertexCaterpillars:[4,2,1,""],getVertexMetamorphCoefs:[4,2,1,""],getVertexPerDegreeMetamorphosisCoefficients:[4,2,1,""],vertexHasNeighbor:[4,2,1,""],verticesWithDegree:[4,7,1,""]},"CHGL-Server":{ACK:[6,1,1,""],ADD_INCLUSION:[6,1,1,""],CREATE_GRAPH:[6,1,1,""],GET_SIZE:[6,1,1,""],SYN:[6,1,1,""],ServerPort:[6,1,1,""],get_hostname:[6,6,1,""],main:[6,6,1,""]},"DynamicAggregationBuffer.DynamicAggregator":{"_value":[7,2,1,""],destroy:[7,2,1,""],init:[7,2,1,""],instance:[7,3,1,""],isInitialized:[7,2,1,""],msgType:[7,3,1,""],pid:[7,3,1,""]},"DynamicAggregationBuffer.DynamicAggregatorImpl":{agg:[7,3,1,""],aggregate:[7,2,1,""],deinit:[7,2,1,""],dsiGetPrivatizeData:[7,2,1,""],dsiPrivatize:[7,2,1,""],dynamicDestBuffers:[7,3,1,""],flushGlobal:[7,7,1,""],flushLocal:[7,7,1,""],getPrivatizedInstance:[7,2,1,""],init:[7,2,1,""],msgType:[7,3,1,""],pid:[7,3,1,""],size:[7,2,1,""]},"DynamicAggregationBuffer.DynamicBuffer":{acquire:[7,2,1,""],append:[7,2,1,""],arr:[7,3,1,""],dom:[7,3,1,""],done:[7,2,1,""],getArray:[7,2,1,""],lock:[7,3,1,""],msgType:[7,3,1,""],release:[7,2,1,""],size:[7,2,1,""]},"EquivalenceClasses.Equivalence":{add:[8,2,1,""],candidates:[8,3,1,""],candidatesDom:[8,3,1,""],cmpType:[8,3,1,""],eqclasses:[8,3,1,""],eqclassesDom:[8,3,1,""],getCandidates:[8,7,1,""],getEquivalenceClasses:[8,7,1,""],init:[8,2,1,""],keyType:[8,3,1,""],readWriteThis:[8,2,1,""],reduction:[8,2,1,""]},"EquivalenceClasses.ReduceEQClass":{accumulate:[8,2,1,""],accumulateOntoState:[8,2,1,""],clone:[8,2,1,""],cmpType:[8,3,1,""],combine:[8,2,1,""],generate:[8,2,1,""],identity:[8,2,1,""],init:[8,2,1,""],keyType:[8,3,1,""],value:[8,3,1,""]},"ExplicitString.String":{"init=":[9,2,1,""],data:[9,3,1,""],dataLen:[9,3,1,""],destroy:[9,2,1,""],hash:[9,3,1,""],init:[9,2,1,""],readWriteThis:[9,2,1,""],toString:[9,2,1,""]},"Generation.DynamicArray":{"this":[10,2,1,""],arr:[10,3,1,""],dom:[10,3,1,""],init:[10,2,1,""]},"Generation.WorkInfo":{numOperations:[10,3,1,""],rngOffset:[10,3,1,""],rngSeed:[10,3,1,""]},"Graph.Graph":{"_value":[11,2,1,""],destroy:[11,2,1,""],init:[11,2,1,""],instance:[11,3,1,""],pid:[11,3,1,""]},"Graph.GraphImpl":{addEdge:[11,2,1,""],cacheValid:[11,3,1,""],cachedNeighborList:[11,3,1,""],cachedNeighborListDom:[11,3,1,""],degree:[11,2,1,""],edgeCounter:[11,3,1,""],flush:[11,2,1,""],getEdges:[11,7,1,""],hasEdge:[11,2,1,""],hg:[11,3,1,""],init:[11,2,1,""],insertAggregator:[11,3,1,""],intersection:[11,2,1,""],intersectionSize:[11,2,1,""],invalidateCache:[11,2,1,""],isCacheValid:[11,2,1,""],neighbors:[11,7,1,""],pid:[11,3,1,""],privatizedCachedNeighborListInstance:[11,3,1,""],privatizedCachedNeighborListPID:[11,3,1,""],simplify:[11,2,1,""],vDescType:[11,3,1,""],validateCache:[11,2,1,""]},"Metrics.ComponentCoalescer":{"this":[12,2,1,""]},"Privatization.Privatized":{"_value":[13,2,1,""],destroy:[13,2,1,""],init:[13,2,1,""],instance:[13,3,1,""],pid:[13,3,1,""],readWriteThis:[13,2,1,""],varType:[13,3,1,""]},"Privatization.PrivatizedArray":{arr:[13,3,1,""],dom:[13,3,1,""],varType:[13,3,1,""]},"Privatization.PrivatizedImpl":{broadcast:[13,3,1,""],deinit:[13,2,1,""],dsiGetPrivatizeData:[13,2,1,""],dsiPrivatize:[13,2,1,""],get:[13,2,1,""],init:[13,2,1,""],pid:[13,3,1,""],privatizedArray:[13,3,1,""],readWriteThis:[13,2,1,""],varType:[13,3,1,""]},"PropertyMaps.PropertyHandle":{get:[14,2,1,""],init:[14,2,1,""],isReady:[14,2,1,""],ready:[14,3,1,""],retVal:[14,3,1,""],set:[14,2,1,""]},"PropertyMaps.PropertyMap":{"_value":[14,2,1,""],clone:[14,2,1,""],destroy:[14,2,1,""],init:[14,2,1,""],isInitialized:[14,2,1,""],mapperType:[14,3,1,""],propertyType:[14,3,1,""]},"PropertyMaps.PropertyMapImpl":{"_flushGetAggregatorBuffer":[14,2,1,""],append:[14,2,1,""],create:[14,2,1,""],flushGlobal:[14,2,1,""],flushLocal:[14,2,1,""],getProperty:[14,2,1,""],getPropertyAsync:[14,2,1,""],init:[14,2,1,""],localProperties:[14,7,1,""],lock:[14,3,1,""],mapper:[14,3,1,""],numProperties:[14,2,1,""],numPropertiesGlobal:[14,2,1,""],propertyType:[14,3,1,""],setProperty:[14,2,1,""],these:[14,7,1,""]},"TerminationDetection.TerminationDetector":{"_value":[15,2,1,""],destroy:[15,2,1,""],init:[15,2,1,""],instance:[15,3,1,""],pid:[15,3,1,""]},"TerminationDetection.TerminationDetectorImpl":{awaitTermination:[15,2,1,""],dsiGetPrivatizeData:[15,2,1,""],dsiPrivatize:[15,2,1,""],finished:[15,2,1,""],getPrivatizedInstance:[15,2,1,""],getStatistics:[15,2,1,""],hasTerminated:[15,2,1,""],init:[15,2,1,""],pid:[15,3,1,""],started:[15,2,1,""],tasksFinished:[15,3,1,""],tasksStarted:[15,3,1,""]},"UnrolledLinkedList.UnrollBlock":{cap:[17,3,1,""],data:[17,3,1,""],eltType:[17,3,1,""],end:[17,3,1,""],next:[17,3,1,""],start:[17,3,1,""]},"UnrolledLinkedList.UnrolledLinkedList":{append:[17,2,1,""],deinit:[17,2,1,""],eltType:[17,3,1,""],head:[17,3,1,""],init:[17,2,1,""],remove:[17,2,1,""],size:[17,2,1,""],sz:[17,3,1,""],these:[17,7,1,""],unrollBlockSize:[17,3,1,""]},"Utilities.ArrayRef":{"_value":[18,2,1,""],init:[18,2,1,""],instance:[18,3,1,""],pid:[18,3,1,""]},"Utilities.Centralized":{init:[18,2,1,""],x:[18,3,1,""]},"Vectors.Vector":{"this":[19,2,1,""],append:[19,2,1,""],arr:[19,3,1,""],cap:[19,3,1,""],clear:[19,2,1,""],dom:[19,3,1,""],eltType:[19,3,1,""],growthRate:[19,3,1,""],init:[19,2,1,""],intersection:[19,2,1,""],intersectionSize:[19,2,1,""],readWriteThis:[19,2,1,""],size:[19,2,1,""],sort:[19,2,1,""],sz:[19,3,1,""],these:[19,7,1,""],toArray:[19,2,1,""]},"WorkQueue.Bag":{add:[21,2,1,""],addBulk:[21,2,1,""],deinit:[21,2,1,""],eltType:[21,3,1,""],init:[21,2,1,""],maxParallelSegmentSpace:[21,3,1,""],nextStartIdxDeq:[21,2,1,""],nextStartIdxEnq:[21,2,1,""],remove:[21,2,1,""],removeBulk:[21,2,1,""],segments:[21,3,1,""],size:[21,2,1,""],startIdxDeq:[21,3,1,""],startIdxEnq:[21,3,1,""]},"WorkQueue.DuplicateCoalescer":{"this":[21,2,1,""],dupValue:[21,3,1,""],init:[21,2,1,""],t:[21,3,1,""]},"WorkQueue.NopCoalescer":{"this":[21,2,1,""],init:[21,2,1,""],t:[21,3,1,""]},"WorkQueue.WorkQueue":{"_value":[21,2,1,""],colaesceFnType:[21,3,1,""],init:[21,2,1,""],instance:[21,3,1,""],isInitialized:[21,2,1,""],pid:[21,3,1,""],workType:[21,3,1,""]},"WorkQueue.WorkQueueImpl":{addWork:[21,2,1,""],asyncTasks:[21,3,1,""],coalesceFn:[21,3,1,""],destBuffer:[21,3,1,""],destroy:[21,2,1,""],dsiGetPrivatizeData:[21,2,1,""],dsiPrivatize:[21,2,1,""],dynamicDestBuffer:[21,3,1,""],flush:[21,2,1,""],flushLocal:[21,2,1,""],getPrivatizedInstance:[21,2,1,""],getWork:[21,2,1,""],getWorkBulk:[21,2,1,""],globalSize:[21,2,1,""],init:[21,2,1,""],isEmpty:[21,2,1,""],isShutdown:[21,2,1,""],pid:[21,3,1,""],queue:[21,3,1,""],shutdown:[21,2,1,""],shutdownSignal:[21,3,1,""],size:[21,2,1,""],workPending:[21,2,1,""],workType:[21,3,1,""]},AdjListHyperGraph:{"!=":[1,6,1,""],"+=":[1,6,1,""],"<":[1,6,1,""],"==":[1,6,1,""],">":[1,6,1,""],"_cast":[1,6,1,""],AdjListHyperGraph:[1,5,1,""],AdjListHyperGraphDisableAggregation:[1,1,1,""],AdjListHyperGraphDisablePrivatization:[1,1,1,""],AdjListHyperGraphImpl:[1,4,1,""],Wrapper:[1,5,1,""],fromAdjacencyList:[1,6,1,""],id:[1,6,1,""]},AggregationBuffer:{Aggregator:[2,5,1,""],AggregatorBufferSize:[2,1,1,""],AggregatorDebug:[2,1,1,""],AggregatorImpl:[2,4,1,""],AggregatorMaxBuffers:[2,1,1,""],Buffer:[2,4,1,""],UninitializedAggregator:[2,6,1,""],debug:[2,6,1,""]},BinReader:{DEBUG_BIN_READER:[3,1,1,""],binToGraph:[3,6,1,""],binToHypergraph:[3,6,1,""],debug:[3,6,1,""],main:[3,6,1,""],numEdgesPresent:[3,1,1,""]},Butterfly:{combinations:[4,6,1,""]},DynamicAggregationBuffer:{DynamicAggregator:[7,5,1,""],DynamicAggregatorImpl:[7,4,1,""],DynamicBuffer:[7,4,1,""],UninitializedDynamicAggregator:[7,6,1,""]},EquivalenceClasses:{Equivalence:[8,4,1,""],ReduceEQClass:[8,4,1,""],main:[8,6,1,""]},ExplicitString:{"+":[9,6,1,""],"==":[9,6,1,""],String:[9,5,1,""]},Generation:{"_round":[10,6,1,""],DynamicArray:[10,5,1,""],GenerationSeedOffset:[10,1,1,""],GenerationUseAggregation:[10,1,1,""],WorkInfo:[10,5,1,""],calculateWork:[10,6,1,""],computeAffinityBlocks:[10,6,1,""],distributedHistogram:[10,6,1,""],generateBTER:[10,6,1,""],generateChungLu:[10,6,1,""],generateChungLuAdjusted:[10,6,1,""],generateChungLuPreScanSMP:[10,6,1,""],generateChungLuSMP:[10,6,1,""],generateErdosRenyi:[10,6,1,""],generateErdosRenyiSMP:[10,6,1,""],histogram:[10,6,1,""],weightedRandomSample:[10,6,1,""]},Graph:{Graph:[11,5,1,""],GraphImpl:[11,4,1,""]},Metrics:{ComponentCoalescer:[12,5,1,""],componentSizeDistribution:[12,6,1,""],edgeComponentSizeDistribution:[12,6,1,""],edgeDegreeDistribution:[12,6,1,""],getEdgeComponentMappings:[12,6,1,""],getEdgeComponents:[12,9,1,""],getVertexComponentMappings:[12,6,1,""],getVertexComponents:[12,9,1,""],vertexComponentSizeDistribution:[12,6,1,""],vertexDegreeDistribution:[12,6,1,""]},Privatization:{"*":[13,6,1,""],"*=":[13,6,1,""],"+":[13,6,1,""],"+=":[13,6,1,""],"-":[13,6,1,""],"-=":[13,6,1,""],"=":[13,6,1,""],Privatized:[13,5,1,""],PrivatizedArray:[13,4,1,""],PrivatizedImpl:[13,4,1,""]},PropertyMaps:{PropertyHandle:[14,4,1,""],PropertyMap:[14,5,1,""],PropertyMapImpl:[14,4,1,""],UninitializedPropertyMap:[14,6,1,""]},TerminationDetection:{"<=>":[15,6,1,""],TerminationDetector:[15,5,1,""],TerminationDetectorImpl:[15,4,1,""]},Traversal:{edgeBFS:[16,9,1,""],vertexBFS:[16,9,1,""]},UnrolledLinkedList:{UnrollBlock:[17,4,1,""],UnrolledLinkedList:[17,5,1,""],main:[17,6,1,""]},Utilities:{"_arrayEquality":[18,6,1,""],"_globalIntRandomStream":[18,1,1,""],"_globalRealRandomStream":[18,1,1,""],"_intersectionSizeAtLeast":[18,6,1,""],ArrayRef:[18,5,1,""],Centralized:[18,4,1,""],all:[18,6,1,""],any:[18,6,1,""],arrayEquality:[18,6,1,""],beginProfile:[18,6,1,""],chpl_comm_get_nb:[18,6,1,""],chpl_comm_nb_handle_t:[18,8,1,""],createBlock:[18,6,1,""],createCyclic:[18,6,1,""],debug:[18,6,1,""],endProfile:[18,6,1,""],forEachCorePerLocale:[18,9,1,""],forEachLocale:[18,9,1,""],getAddr:[18,6,1,""],getLines:[18,9,1,""],getLocale:[18,6,1,""],getLocaleID:[18,6,1,""],getLocaleIdx:[18,6,1,""],getNodeID:[18,6,1,""],getRandomAssociative:[18,6,1,""],get_nb:[18,6,1,""],intersection:[18,6,1,""],intersectionSize:[18,6,1,""],intersectionSizeAtLeast:[18,6,1,""],printDebugInformation:[18,1,1,""],printLocaleStatistics:[18,1,1,""],profileCommDiagnostics:[18,1,1,""],profileCommDiagnosticsVerbose:[18,1,1,""],profileVisualDebug:[18,1,1,""],randInt:[18,6,1,""],randReal:[18,6,1,""]},Vectors:{Vector:[19,4,1,""],VectorGrowthRate:[19,1,1,""]},Visualize:{main:[20,6,1,""],visualize:[20,6,1,""]},WorkQueue:{"<=>":[21,6,1,""],Bag:[21,4,1,""],DuplicateCoalescer:[21,5,1,""],NopCoalescer:[21,5,1,""],UninitializedWorkQueue:[21,6,1,""],WorkQueue:[21,5,1,""],WorkQueueImpl:[21,4,1,""],WorkQueueNoAggregation:[21,1,1,""],WorkQueueUnlimitedAggregation:[21,1,1,""],doWorkLoop:[21,9,1,""],main:[21,6,1,""],workQueueInitialBlockSize:[21,1,1,""],workQueueMaxBlockSize:[21,1,1,""],workQueueMaxTightSpinCount:[21,1,1,""],workQueueMinDifferenceForSteal:[21,1,1,""],workQueueMinEligibleForSteal:[21,1,1,""],workQueueMinTightSpinCount:[21,1,1,""],workQueueMinVelocityForFlush:[21,1,1,""],workQueueVerbose:[21,1,1,""]},activeDNS:{"_currLoc":[23,1,1,""],blacklistDNS:[23,1,1,""],blacklistDNSNames:[23,1,1,""],blacklistDNSNamesRegex:[23,1,1,""],blacklistDNSNamesRegexp:[23,1,1,""],blacklistIPAddresses:[23,1,1,""],blacklistIPRegex:[23,1,1,""],blacklistIPRegexp:[23,1,1,""],blacklistIPs:[23,1,1,""],componentsDirectory:[23,1,1,""],currLoc:[23,1,1,""],datasetDirectory:[23,1,1,""],dnsNameIndex:[23,1,1,""],doProfiling:[23,1,1,""],doToplexReduction:[23,1,1,""],eDupeHistogram:[23,1,1,""],ePropMap:[23,1,1,""],f:[23,1,1,""],ff:[23,1,1,""],fileNames:[23,1,1,""],files:[23,1,1,""],getMetrics:[23,6,1,""],graph:[23,1,1,""],handleTD:[23,1,1,""],handleWQ:[23,1,1,""],hypergraphOutput:[23,1,1,""],ipAddressIndex:[23,1,1,""],memTestOnly:[23,1,1,""],metricsOutput:[23,1,1,""],nFiles:[23,1,1,""],numIsolatedComponents:[23,1,1,""],numMaxFiles:[23,1,1,""],outputDirectory:[23,1,1,""],postCollapseBlacklist:[23,1,1,""],postCollapseComponents:[23,1,1,""],postCollapseMetrics:[23,1,1,""],postRemovalBlacklist:[23,1,1,""],postRemovalComponents:[23,1,1,""],postRemovalMetrics:[23,1,1,""],postToplexBlacklist:[23,1,1,""],postToplexComponents:[23,1,1,""],postToplexMetrics:[23,1,1,""],preCollapseBlacklist:[23,1,1,""],preCollapseComponents:[23,1,1,""],preCollapseMetrics:[23,1,1,""],printPropertyDistribution:[23,6,1,""],searchBlacklist:[23,6,1,""],skipHeader:[23,1,1,""],t:[23,1,1,""],td:[23,1,1,""],tt:[23,1,1,""],vDupeHistogram:[23,1,1,""],vPropMap:[23,1,1,""],wq:[23,1,1,""]},graphs:{arr:[24,1,1,""],configFile:[24,1,1,""],distanceEdgeBFS:[24,9,1,""],f:[24,1,1,""],graph:[24,1,1,""],maxEccentricity:[24,1,1,""],numEdges:[24,1,1,""],numVerts:[24,1,1,""],tmp:[24,1,1,""]}},objnames:{"0":["chpl","module"," module"],"1":["chpl","data"," data"],"2":["chpl","method"," method"],"3":["chpl","attribute"," attribute"],"4":["chpl","class"," class"],"5":["chpl","record"," record"],"6":["chpl","function"," function"],"7":["chpl","itermethod"," itermethod"],"8":["chpl","type"," type"],"9":["chpl","iterfunction"," iterfunction"]},objtypes:{"0":"chpl:module","1":"chpl:data","2":"chpl:method","3":"chpl:attribute","4":"chpl:class","5":"chpl:record","6":"chpl:function","7":"chpl:itermethod","8":"chpl:type","9":"chpl:iterfunction"},terms:{"40mb":26,"_arrayequ":18,"_cast":1,"_currloc":23,"_ddata":9,"_edgesdomain":1,"_eproptyp":1,"_flushgetaggregatorbuff":14,"_globalintrandomstream":18,"_globalrealrandomstream":18,"_intersectionsizeatleast":18,"_iteratorrecord":[18,19],"_newarrai":13,"_not_":1,"_pid":11,"_round":10,"_string":9,"_v1":11,"_v2":11,"_valu":[2,7,11,13,14,15,16,18,21,24],"_verticesdomain":1,"_vproptyp":1,"abstract":[8,25],"boolean":4,"case":21,"class":[1,2,7,8,11,13,14,15,17,18,19,21,25],"const":[2,3,6,10,18,19,21,23,24],"default":[1,10],"export":20,"int":[1,2,4,7,9,10,11,12,13,14,15,17,18,19,21,23,24],"new":[1,9,14,21,23,24],"null":1,"return":[1,2,4,12,21],"throw":[1,3,14,20],"true":[3,4,10,14,18,23],"var":[1,2,7,8,9,10,11,13,14,15,17,18,19,21,23,24],"void":[7,23],"while":1,about:15,abov:26,access:1,accumul:8,accumulateontost:8,ack:6,acquir:7,acquirelock:14,act:1,activ:1,activedn:22,add:[1,8,21],add_inclus:6,addbulk:21,addedg:11,addinclus:1,addinclusionbuff:1,addit:26,addr:18,address:23,addwork:21,adjac:1,adjlisthypergraph:0,adjlisthypergraphdisableaggreg:1,adjlisthypergraphdisableprivat:1,adjlisthypergraphimpl:[1,4],advis:1,after:[1,2,16,18,23,26],agg:7,aggreg:[1,2,7,14],aggregationbuff:0,aggregatorbuffers:2,aggregatordebug:2,aggregatorimpl:2,aggregatormaxbuff:2,aliv:15,all:[1,4,7,8,10,12,15,18,23,26],alloc:1,allow:1,along:1,alreadi:14,also:[1,9,26],altern:26,ani:[1,4,9,18,25],anoth:[1,8,15],apart:1,api:25,append:[7,14,17,19],appendexpr:[23,24],applic:25,approach:[6,21],approx:26,arbitrarili:8,areadjacentvertic:4,arg:[1,2,3,12,18],argument:[1,4,10,12,14,18],arkouda:6,around:9,arr:[7,10,12,13,18,19,21,24],arrai:[1,4,9,12,18,21],arrayequ:18,arrayref:18,assign:[9,12,14],associ:[1,4,8,24],assumpt:1,asynchron:14,asynctask:21,atomicbool:[7,11,14,21],atomicint:23,automat:1,avoid:7,awaittermin:15,back:[2,23],background:7,bag:21,bagseg:21,balanc:21,base:8,becom:15,been:[6,9,15,26],befor:[15,26],begin:15,beginprofil:18,behavior:[2,9],below:26,benefit:15,best:[21,26],between:[10,25],bidirect:1,binari:[23,26],binread:[0,1],bintograph:3,bintohypergraph:3,bipartit:[1,24],blacklist:23,blacklistdn:23,blacklistdnsnam:23,blacklistdnsnamesregex:23,blacklistdnsnamesregexp:23,blacklistip:23,blacklistipaddress:23,blacklistipregex:23,blacklistipregexp:23,blob:9,block:[1,10,13],bool:[1,9,15,17,18,21],both:[1,12,15,16,26],boundingbox:[1,13],boundscheck:1,branch:26,branch_nam:26,breadth:16,brief:6,broadcast:13,buf:[7,14],buffer:[1,2,7,14],bug:14,build:26,bulk:21,butterfli:0,c_int:18,c_void_ptr:18,cach:9,cachedneighborlist:11,cachedneighborlistdom:11,cachevalid:11,calcuat:4,calcul:4,calculatework:10,call08:[23,24],call:[1,7],can:[1,4,12,14,15,16,18,25],candid:[1,8],candidatesdom:8,cannot:[1,14],cap:[2,17,19],captur:[18,25],cardin:1,care:18,cast:4,caus:[1,26],ceas:1,central:18,certain:1,chanc:21,chang:[1,23,26],chapel:[0,9,15,18,22,25],check:[1,4,18,23,26],checkout:26,chgl:0,child:15,chosen:8,chpl:9,chpl__processoratomictyp:[15,21],chpl__tuple_arg_temp:1,chpl_comm_get_nb:18,chpl_comm_nb_handle_t:18,chpl_localeid_t:18,chpl_nodeid_t:18,chunksiz:18,clear:19,client:6,clone:[8,14,26],club:23,cmp:8,cmptype:8,coalescefn:21,code:[16,26],coeffici:4,coforal:1,colaescefntyp:21,collaps:1,collapseedg:1,collapsesubset:1,collapsevertic:1,com:[9,26],combin:[4,8],come:7,command:26,commid:18,commit:26,commit_hash:26,common:[4,12],commun:1,compar:4,compil:[1,12,14,25,26],compon:[1,12,16,23],componentcoalesc:12,componentmap:12,componentsdirectori:23,componentsizedistribut:12,compopt:26,comput:[8,10,14,25],computeaffinityblock:10,concept:6,config:[1,2,3,6,10,18,19,21,23,24],configfil:24,configur:24,confirm:9,connect:[6,12,25],consid:23,contain:[1,2,4,23,24,26],content:[0,22],continu:26,contract:1,copi:[1,2,9,14,18],correct:26,count:[4,12],counter:15,countri:26,couponcollector:10,creat:[1,7,9,10,14,15,18],create_graph:6,createblock:18,createcycl:18,csc:1,csr:1,csv:23,current:[1,2,8,14,26],currloc:23,cut:1,cycl:4,cyclic:[1,23],cylc:4,danger:14,data:[2,7,9,14,15,17,23],datalen:9,dataset:[3,23],datasetdirectori:23,date:6,dealloc:14,debian:26,debug:[2,3,18],debug_bin_read:3,decrement:15,deep:14,defaultdist:1,defaultmapp:14,defaultrectangulardist:1,defin:4,degre:[1,4,10,11,12],deinit:[2,7,13,17,21],delet:1,delimitor:1,depth:16,dequeu:21,desc:1,descriptor:1,design:25,desir:[1,4,10],desired_edge_degre:10,desired_vertex_degre:10,desirededgedegre:10,desiredvertexdegre:10,destbuff:21,destroi:[1,2,7,9,11,13,14,15,21],detail:26,detect:[15,16],detector:15,determin:[1,8,14,15,18],differ:26,dimension:25,directli:[25,26],directori:[23,26],disabl:1,disk:26,distanceedgebf:24,distributedhistogram:10,dmap:13,dnsnameindex:23,doc:26,docker:26,docompon:23,doe:[9,14],dole:23,dom:[7,10,13,18,19],domain:[1,8,12,18,23],done:[2,7,16],doprofil:23,dosomethingto:15,dot:20,dotoplexreduct:23,download:26,doworkloop:21,doworkst:21,dsigetprivatizedata:[2,7,13,15,21],dsiprivat:[2,7,13,15,21],due:[9,14],duplic:[1,4,8,14],duplicatecoalesc:21,dupvalu:21,dure:1,dynam:7,dynamicaggreg:7,dynamicaggregationbuff:0,dynamicaggregatorimpl:7,dynamicarrai:10,dynamicbuff:7,dynamicdestbuff:[7,21],e6b8fd15b54e2c1f04d4dbf5bc8bff523551842a:9,each:[1,4,8,15,21,23],easi:[8,15],eddom:10,edegseq:10,edegseqdom:10,edesc:1,edesctyp:[1,4,16,24],edg:[1,4,10,12,24,25],edgebf:16,edgecomponentsizedistribut:12,edgecount:11,edgedegreedistribut:12,edgedomain:10,edgemap:1,edgescan:10,edgesdomain:[1,10],edgesmap:[1,11],edgeswithdegre:4,edgewrappereindextyp:1,edupehistogram:23,eduplicatehistogram:1,effect:18,effici:8,effort:21,eindextyp:1,element:[1,8,21],els:11,elt:[17,18,19,21],elttyp:[13,17,18,19,21],elttypec_arraycap:17,elttypeunrollblockcap:17,elttypeunrollblockunrollblocks:17,emc:10,emcdom:10,emerg:25,empti:14,enabl:[1,18],end:[17,23],endprofil:18,enough:15,enqueu:21,entir:[10,18],entiti:25,epropmap:[1,23],eproptyp:1,eqclass:8,eqclassesdom:8,equival:[1,8,15],equivalenceclass:0,erdo:10,error:[14,26],evalu:18,even:[9,15],evenli:[21,23],everi:[1,4],everyth:11,exampl:[1,8,15,24,25,26],except:18,excess:9,execut:26,exist:[1,4,8,14],expand:2,experi:2,explicit:[1,7],explicitli:[1,7],explicitstr:0,express:[23,25],extrem:23,fals:[1,2,3,4,14,16,18,21,23],fast:1,featur:9,ferguson:9,fetch:4,few:1,file:[1,18,23,24],filenam:[1,20,23],find:21,finish:15,first:[4,6,16,24],flexibl:23,flush:[1,7,11,14,21],flushbuff:1,flushglob:[2,7,14],flushloc:[2,7,14,21],follo:26,follow:[24,26],followthi:[1,2],foral:[1,11],foreachcoreperlocal:18,foreachlocal:18,format:[20,23,24],forward:[1,11],found:[14,26],from:[1,10],fromadjacencylist:1,full:9,furthermor:21,futur:[18,26],gener:[0,1,8],generatebt:10,generatechunglu:10,generatechungluadjust:10,generatechungluprescansmp:10,generatechunglusmp:10,generateerdosrenyi:10,generateerdosrenyismp:10,generationseedoffset:10,generationuseaggreg:10,get:[7,9,13,14,26],get_hostnam:6,get_nb:18,get_siz:6,getaddr:18,getadjacentvertic:4,getarrai:[2,7],getcandid:8,getdomain:2,getedg:[1,11],getedgebutterfli:4,getedgecaterpillar:4,getedgecompon:12,getedgecomponentmap:12,getedgedegre:1,getedgemetamorphcoef:4,getedgeperdegreemetamorphosiscoeffici:4,getequivalenceclass:8,getinclus:1,getinclusionmetamorphcoef:4,getinclusionnumbutterfli:4,getinclusionnumcaterpillar:4,getlin:18,getlocal:[1,18],getlocaleid:18,getlocaleidx:18,getmetr:23,getnodeid:18,getprivatizedinst:[2,7,15,21],getproperti:[1,14],getpropertyasync:14,getptr:2,getrandomassoci:18,getstatist:15,gettoplex:1,getvertexbutterfli:4,getvertexcaterpillar:4,getvertexcompon:12,getvertexcomponentmap:12,getvertexdegre:1,getvertexmetamorphcoef:4,getvertexperdegreemetamorphosiscoeffici:4,getvertic:1,getwork:21,getworkbulk:21,git:26,github:[9,26],given:[1,4,15],globals:21,goe:18,graph:[0,1,10],graph_exampl:24,graphimpl:11,graphviz:20,group:12,growthrat:19,half:1,handl:7,handletd:23,handlewq:23,hapel:25,hardwar:26,hasedg:11,hash:[9,14],hasinclus:1,hastermin:15,have:[1,4,6,7,9,15,16,21],head:17,header:24,heavili:6,help:21,henc:[1,9,15,18],here:[13,21],high:[18,25],higher:15,highest:4,histogram:[1,10,12],hit:23,hold:7,hope:6,hpc:25,html:26,http:[9,26],hub:26,hyperedg:[1,8,10,12,23],hypergraphoutput:23,ibrari:25,ideal:21,ident:8,identifi:1,idtyp:1,idx:[2,10,18,19],imag:26,implement:[11,15,16],implicit:[1,9,18],incid:[1,8],includ:[4,10,18,26],inclus:4,inclusionstoadd:10,increas:[15,21],increment:15,independ:26,index:[0,1,2,4,22],individu:23,info:23,inform:26,init:[1,2,7,8,9,10,11,13,14,15,17,18,19,21],initi:14,initials:19,inplac:1,input:4,insertaggreg:11,inspir:6,instanc:[1,2,7,11,13,15,18,21],instead:[1,23],instruct:25,integ:[1,4],integr:[1,2,4,6,10,11,18,19,21,26],intend:6,intent:15,interact:25,intern:[9,14,26],intersect:[1,11,12,18,19],intersections:[1,11,18,19],intersectionsizeatleast:18,intmakerandomstreamparsaf:18,invalidatecach:11,invok:[1,2],involv:[14,15],ipaddressindex:23,iscachevalid:11,isconnect:1,isempti:21,isimmut:1,isiniti:[2,7,14,21],isol:1,isreadi:14,isshutdown:21,issu:[7,9],item:10,iter:[1,2,4,7,8,11,12,14,16,17,18,19,21,24],iterkind:[1,2,4,7,8,11,14,16,18,19,21],itself:[1,18],just:[15,23],keep:8,kei:[8,14],keytyp:8,keytypeequival:8,keytypeequivalencecmptyp:8,known:[8,14],l2018:9,l2029:9,lang:[9,26],languag:[25,26],larg:1,later:6,lead:26,leader:8,leak:9,leakag:14,least:[1,4,12,18],left:15,less:21,level:[10,25],liabl:23,librari:[25,26],lifetim:[14,18,26],like:21,line:24,list:[1,4,23],loc:[2,7,13,14,21],local:[1,2,7,10,13,14,15,18,21,23],localespac:[7,13],localproperti:14,locat:[15,26],locid:[2,7,13,21],lock:[7,14],loop:1,low:18,lower:15,mai:26,main:[3,6,8,17,20,21],maintain:1,make:[7,8,15,26],map:[1,11,12,14],mapper:14,mappertyp:14,mason:26,matrix:1,max:23,maxbackoff:15,maxeccentr:24,maximum:4,maxparallelsegmentspac:21,maxtaskpar:21,memori:[1,14,25],memtestonli:23,metamorphosi:4,method:[2,18],metric:0,metricsoutput:23,michael:9,minbackoff:15,minimum:12,modern:25,modifi:1,modul:[0,9,22],more:[23,24,26],most:[21,23],mostli:18,mppf:9,msg:[2,7],msgtype:[2,7],multbackoff:15,multipl:[1,15,25],must:[1,2,10,15,18,23,24,26],mutabl:10,naiv:[1,9],name:[1,23,26],narg:[2,3],nativ:9,necessari:9,need:[7,9,16],neighbor:[1,4,11],neighborlist:4,never:[7,9],next:17,nextstartidxdeq:21,nextstartidxenq:21,nfile:23,node:[15,18],nodedata:1,nodetyp:1,nodetypewrapp:1,nodetypewrapperidtyp:1,nop:1,nopcoalesc:21,nor:14,normal:1,note:[1,18,26],now:[1,23],num_edg:10,num_vertic:10,numaggregatedwork:21,number:[1,4,10,12,24,25],numedg:[1,11,24],numedgespres:3,numer:4,numinclus:10,numisolatedcompon:23,nummaxfil:23,numoper:10,numproperti:14,numpropertiesglob:14,numrandom:10,numvert:24,numvertic:[1,11],numvertsadjlisthypergraphnumedg:24,object:[1,4,14],obtain:[1,12,14,18,21],occur:[15,18],onc:[14,15],onli:[9,18],oom:23,open:7,oper:[1,26],optim:[1,18],option:26,order:25,org:26,origin:[1,14,18,26],other:[1,2,7,8,9,10,11,13,14,15,19,21],our:[21,26],out:[18,20,23,26],output:23,outputdirectori:23,over:[2,6,10,12],overhead:[1,9],overlap:21,overwrit:14,own:[7,15],packag:26,page:[0,22],pair:1,param:[1,2,3,4,6,7,8,10,11,14,16,17,18,19,21],parent:15,pars:23,partial:7,particip:1,particular:26,pass:1,pattern:16,per:4,perfomr:26,perform:[1,9,10,12,14,15,23,25,26],pid:[2,7,11,13,15,18,21],placement:21,pnnl:26,point:1,polici:14,pool:2,possibl:[4,7],postcollapseblacklist:23,postcollapsecompon:23,postcollapsemetr:23,postremovalblacklist:23,postremovalcompon:23,postremovalmetr:23,posttoplexblacklist:23,posttoplexcompon:23,posttoplexmetr:23,precollapseblacklist:23,precollapsecompon:23,precollapsemetr:23,prefetch:14,prefix:23,preprocess:23,print:18,printdebuginform:18,printlocalestatist:18,printpropertydistribut:23,privat:[0,1],privatizedarrai:13,privatizedcachedneighborlistinst:11,privatizedcachedneighborlistpid:11,privatizeddata:13,privatizedimpl:13,probabl:10,probtabl:10,proc:[1,2,3,4,6,7,8,9,10,11,12,13,14,15,17,18,19,20,21,23],profilecommdiagnost:18,profilecommdiagnosticsverbos:18,profilevisualdebug:18,program:26,progress:[1,7],project:6,proof:6,properti:[1,14],propertyhandl:[14,23],propertymap:[0,1],propertymapimpl:14,propertytyp:14,propertytypepropertymap:14,propmap:23,prototyp:[6,11],provid:[1,8,25],pure:1,python:[6,26],queri:4,queue:21,quickli:23,quickstart:25,raddr:18,randint:18,randreal:18,randvalu:10,rang:[4,18],raph:25,rather:1,read:1,reader:1,readi:14,readm:26,readwritethi:[1,2,8,9,13,19],real:[4,10,19],realmakerandomstreamparsaf:18,record:[1,2,7,9,10,11,12,13,14,15,17,18,21],recycl:2,reduc:15,reduceeqclass:8,reducescanop:8,reduct:[8,15],ref:[1,2,8,10,13,15,17,18,19,21],refer:[1,14,18],regard:1,regexp:23,regular:23,rehash:9,releas:[7,26],remot:[2,9,15,18],remov:[1,17,21],removebulk:21,removedupl:1,removeisolatedcompon:1,renyi:10,repositori:26,repres:[1,4,14],request:7,requir:16,respect:[1,15],result:[1,9,14,23,25],retval:14,rhel:26,right:15,rng:18,rngoffset:10,rngseed:10,robin:21,round:21,routin:26,run:[25,26],safe:1,same:[1,12,14,15],scope:18,script:26,search:[0,16,22,23],searchblacklist:23,second:4,section:26,see:26,segment:[21,23],select:8,self:2,send:7,sent:7,separ:1,sequenc:[1,10],sequenti:1,serial:14,serv:1,server:0,serverport:6,set:[1,8,10,14],setproperti:14,sever:1,shallow:[1,14],share:[1,4,14,25],should:[1,11],shrink:9,shutdown:21,shutdownsign:21,side:18,significantli:12,similar:1,simpl:11,simplifi:[1,11],simultan:26,sink:1,site:23,size:[1,2,7,12,17,18,19,21],size_t:18,sizeglob:2,skiphead:23,slower:12,sort:[10,19],sourc:1,space:[9,24,26],spawn:15,special:26,start:[15,17],start_test:26,startaggreg:1,startidx:[1,18,23],startidxdeq:21,startidxenq:21,state:8,statement:1,statu:26,still:[1,18],stopaggreg:1,storag:1,store:[1,4,9],str1:9,str2:9,str:9,strictli:1,string:[1,3,6,9,18,23,24],stringworkqueue1024:23,strip:14,subject:2,subset:[1,10],success:26,sum:1,superset:1,suppli:26,support:[11,25],sure:26,syn:6,system:[25,26],tag:[1,2,4,7,8,11,14,16,18,19,21,26],tag_nam:26,take:6,target:[4,26],targetloc:10,targetlocal:[2,10],task:[7,15,21],tasksfinish:15,tasksstart:15,term:[1,15],termin:[15,16],terminationdetect:0,terminationdetector:[15,21,23],terminationdetectorimpl:15,test:4,than:[1,12,15],thei:[1,21],them:[1,12,26],thi:[1,2,4,6,7,8,9,10,12,14,16,18,19,21,23],thought:14,thread:1,through:[1,26],thu:25,time:[1,15,26],timer:23,tmp:[23,24],toarrai:19,todo:[2,23],toedg:1,top:23,toplex:1,tostr:9,tovertex:1,transfer:9,travers:0,travi:26,treat:18,truth:4,tupl:14,twice:15,two:[1,4,10,15,18],txt:23,type:[1,2,4,7,8,9,11,13,14,17,18,19,21],typeindex:18,uint:[9,21],unaffect:18,undefin:2,under:4,underli:11,uniform:11,uniniti:14,uninitializedaggreg:[2,7,11,21],uninitializeddynamicaggreg:[7,21],uninitializedpropertymap:14,uninitializedworkqueu:21,unit:26,unmanag:[1,2,7,8,11,13,14,15,17,21,23],unrollblock:17,unrollblocks:17,unrolledlinkedlist:0,until:7,updat:[1,15],usa:26,usemaximumparallel:16,user:[1,2,7,18],usingchapel:26,util:0,val:14,valid:1,validatecach:11,valu:[4,8,14,18],vartyp:13,vddom:10,vdebug:18,vdebugnam:18,vdegseq:10,vdegseqdom:10,vdesc:1,vdesctyp:[1,4,11,16],vdupehistogram:23,vduplicatehistogram:1,vector:[0,11],vectorgrowthr:19,veri:15,verifi:[1,26],version:[1,26],vertex:[1,4,10,12,24],vertexbf:16,vertexcomponentsizedistribut:12,vertexdegreedistribut:12,vertexdomain:10,vertexhasneighbor:4,vertexmap:1,vertexscan:10,vertexwrappervindextyp:1,vertic:[1,4,8,10,12,24,25],verticesdomain:[1,10,11],verticesmap:[1,11],verticeswithdegre:4,via:1,vindextyp:1,virtual:26,visit:15,visitor:16,visual:0,vmc:10,vmcdom:10,vpropmap:[1,23],vproptyp:1,wai:[1,14],walk:[1,12],want:23,warn:[18,26],weightedrandomsampl:10,well:26,were:26,what:8,when:[7,14],where:[1,4,8,14,21,25],whether:[1,14,15,18],which:[1,8,10,14,15,18],within:[1,4],without:[1,4,18],work:[1,21],workinfo:10,workpend:21,workqueu:0,workqueue64:23,workqueueimpl:21,workqueueinitialblocks:21,workqueuemaxblocks:21,workqueuemaxtightspincount:21,workqueuemindifferenceforst:21,workqueuemineligibleforst:21,workqueuemintightspincount:21,workqueueminvelocityforflush:21,workqueuenoaggreg:21,workqueueunlimitedaggreg:21,workqueueverbos:21,worktyp:21,worktypeworkqueueimplcolaescefntyp:21,would:[1,14],wq1:21,wq2:21,wrapper:[1,18],written:26,yield:[1,4],yml:26,you:[1,26],your:26,yper:25,zero:24,zmq:6},titles:["chpldoc documentation","AdjListHyperGraph","AggregationBuffer","BinReader","Butterfly","CHGL","CHGL-Server","DynamicAggregationBuffer","EquivalenceClasses","ExplicitString","Generation","Graph","Metrics","Privatization","PropertyMaps","TerminationDetection","Traversal","UnrolledLinkedList","Utilities","Vectors","Visualize","WorkQueue","chpldoc documentation","activeDNS","graphs","CHGL Documentation","Quickstart Instructions"],titleterms:{"case":26,activedn:23,adjlisthypergraph:1,aggregationbuff:2,binread:3,butterfli:4,chapel:26,chgl:[5,6,25,26],chpldoc:[0,22],depend:26,distribut:[1,26],document:[0,22,25],dual:1,dynamicaggregationbuff:7,environ:26,equivalenceclass:8,explicitstr:9,file:26,gener:10,global:1,graph:[11,24],hypergraph:1,indic:[0,22],instal:26,instruct:26,metric:12,parallel:1,privat:13,propertymap:14,quickstart:26,requir:26,server:6,tabl:[0,22],terminationdetect:15,test:26,travers:16,unrolledlinkedlist:17,usag:1,util:18,vector:19,view:1,visual:20,workqueu:21}})