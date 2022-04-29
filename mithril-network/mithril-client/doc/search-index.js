var searchIndex = JSON.parse('{\
"mithril_client":{"doc":"Mithril Network / Mithril Client","t":[3,4,13,13,13,13,0,0,11,11,11,11,11,11,11,11,0,12,0,0,11,11,11,11,11,11,11,11,11,5,5,12,11,11,11,11,11,11,11,11,12,12,12,12,12,3,8,12,5,11,11,10,11,11,10,11,11,10,11,12,11,11,11,11,10,11,3,11,11,11,11,11,11,11,11,11,11,11,11,3,12,11,11,5,5,11,11,11,11,12,11,11,11,11,11,11,11,3,6,3,3,12,11,11,11,11,11,11,11,11,11,11,11,11,12,11,12,11,11,12,12,11,11,11,11,11,11,11,11,11,11,11,12,12,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,17],"n":["Args","Commands","Download","List","Restore","Show","aggregator","aggregator_fake","augment_args","augment_args_for_update","augment_subcommands","augment_subcommands_for_update","borrow","borrow","borrow_mut","borrow_mut","client","command","entities","errors","from","from","from_arg_matches","from_arg_matches","has_subcommand","into","into","into_app","into_app_for_update","main","pretty_print_error","run_mode","try_from","try_from","try_into","try_into","type_id","type_id","update_from_arg_matches","update_from_arg_matches","verbose","digest","digest","digest","location_index","AggregatorHTTPClient","AggregatorHandler","aggregator_endpoint","archive_file_path","borrow","borrow_mut","download_snapshot","download_snapshot","from","get_snapshot_details","get_snapshot_details","into","list_snapshots","list_snapshots","network","new","try_from","try_into","type_id","unpack_snapshot","unpack_snapshot","AggregatorHandlerFake","borrow","borrow_mut","download_snapshot","from","get_snapshot_details","into","list_snapshots","new","try_from","try_into","type_id","unpack_snapshot","Client","aggregator_handler","borrow","borrow_mut","convert_to_field_items","convert_to_list_item","download_snapshot","from","into","list_snapshots","network","new","restore_snapshot","show_snapshot","try_from","try_into","type_id","with_aggregator_handler","Config","Snapshot","SnapshotFieldItem","SnapshotListItem","aggregator_endpoint","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","created_at","deserialize","digest","eq","eq","field_name","field_value","fmt","fmt","fmt","from","from","from","into","into","into","ne","ne","network","network","new","new","partial_cmp","partial_cmp","row","row","row","serialize","size","title","title","title","to_owned","to_owned","to_owned","total_locations","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","MISSING_AGGREGATOR_HANDLER"],"q":["mithril_client","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","mithril_client::Commands","","","","mithril_client::aggregator","","","","","","","","","","","","","","","","","","","","","mithril_client::aggregator_fake","","","","","","","","","","","","","mithril_client::client","","","","","","","","","","","","","","","","","","mithril_client::entities","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","mithril_client::errors"],"d":["CLI args","CLI command list","Download a snapshot","List available snapshots","Restore a snapshot","Infos about a snapshot","","","","","","","","","","","","Available commands","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","Pretty print error","Run Mode","","","","","","","","","Verbosity level","Snapshot digest","Snapshot digest","Snapshot digest","Snapshot location index","AggregatorHTTPClient is a http client for an aggregator","AggregatorHandler represents a read interactor with an …","","Computes local archive filepath","","","Download snapshot","Download Snapshot","Returns the argument unchanged.","Get snapshot details","Get snapshot details","Calls <code>U::from(self)</code>.","List snapshots","List snapshots","","AggregatorHTTPClient factory","","","","Unpack snapshot","Unpack snapshot","AggregatorHandlerFake is a fake AggregatorHandler","","","Download Snapshot","Returns the argument unchanged.","Get snapshot details","Calls <code>U::from(self)</code>.","List snapshots","AggregatorHandlerFake factory","","","","Unpack snapshot","Mithril client wrapper","","","","Convert Snapshot to SnapshotFieldItems routine","Convert Snapshot to SnapshotListItem routine","Download a snapshot by digest","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","List snapshots","","Client factory","Restore a snapshot by hash","Show a snapshot","","","","With AggregatorHandler","Client configuration","Snapshot is an alias from the aggregator Snapshot type","SnapshotFieldItem represents a field of a snapshot item …","SnapshotListItem represents a snapshot list item from an …","Aggregator endpoint","","","","","","","","","","","","","Date and time at which the snapshot was created","","Digest that is signed by the signer participants","","","Field name","Field value","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","Cardano network","Cardano network","SnapshotListItem factory","SnapshotFieldItem factory","","","","","","","Size of the snapshot file in Bytes","","","","","","","Number of locations where the binary content of the …","","","","","","","","","",""],"i":[0,0,1,1,1,1,0,0,2,2,1,1,2,1,2,1,0,2,0,0,2,1,2,1,1,2,1,2,2,0,0,2,2,1,2,1,2,1,2,1,2,3,4,5,4,0,0,6,0,6,6,7,6,6,7,6,6,7,6,6,6,6,6,6,7,6,0,8,8,8,8,8,8,8,8,8,8,8,8,0,9,9,9,0,0,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,10,10,11,12,10,11,12,10,11,12,10,11,12,11,10,11,11,12,12,12,10,11,12,10,11,12,10,11,12,11,12,10,11,11,12,11,12,10,11,12,10,11,10,11,12,10,11,12,11,10,11,12,10,11,12,10,11,12,0],"f":[null,null,null,null,null,null,null,null,[[["command",6]],["command",6]],[[["command",6]],["command",6]],[[["command",6]],["command",6]],[[["command",6]],["command",6]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],null,null,null,null,[[]],[[]],[[["argmatches",3]],["result",4,[["error",3]]]],[[["argmatches",3]],["result",4,[["error",3]]]],[[["str",0]],["bool",0]],[[]],[[]],[[],["command",6]],[[],["command",6]],[[]],[[["string",3]]],null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0],["argmatches",3]],["result",4,[["error",3]]]],[[["",0],["argmatches",3]],["result",4,[["error",3]]]],null,null,null,null,null,null,null,null,[[["str",0],["str",0]],["result",4,[["pathbuf",3],["string",3]]]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0],["str",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],[[["",0],["str",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],[[]],[[["",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],[[["",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],[[]],[[["",0]],["pin",3,[["box",3,[["future",8]]]]]],[[["",0]],["pin",3,[["box",3,[["future",8]]]]]],null,[[["string",3],["string",3]]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],[[["",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0],["str",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],[[]],[[["",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],[[]],[[["",0]],["pin",3,[["box",3,[["future",8]]]]]],[[["arc",3,[["config",3]]]]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0],["str",0]],["pin",3,[["box",3,[["future",8]]]]]],null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["snapshot",3],["string",3]],["vec",3,[["snapshotfielditem",3]]]],[[["snapshot",3],["string",3]],["snapshotlistitem",3]],[[["",0],["str",0],["isize",0]]],[[]],[[]],[[["",0]]],null,[[["string",3]]],[[["",0],["str",0]]],[[["",0],["str",0]]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["",0]],null,null,null,null,null,[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["",0]],[[["",0]],["config",3]],[[["",0]],["snapshotlistitem",3]],[[["",0]],["snapshotfielditem",3]],[[["",0],["",0]]],[[["",0],["",0]]],[[["",0],["",0]]],null,[[],["result",4]],null,[[["",0],["snapshotlistitem",3]],["bool",0]],[[["",0],["snapshotfielditem",3]],["bool",0]],null,null,[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[["",0],["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[["",0],["snapshotlistitem",3]],["bool",0]],[[["",0],["snapshotfielditem",3]],["bool",0]],null,null,[[["string",3],["string",3],["u64",0],["u16",0],["string",3]],["snapshotlistitem",3]],[[["string",3],["string",3]],["snapshotfielditem",3]],[[["",0],["snapshotlistitem",3]],["option",4,[["ordering",4]]]],[[["",0],["snapshotfielditem",3]],["option",4,[["ordering",4]]]],[[],["rowstruct",3]],[[],["rowstruct",3]],[[],["rowstruct",3]],[[["",0]],["result",4]],null,[[],["rowstruct",3]],[[],["rowstruct",3]],[[],["rowstruct",3]],[[["",0]]],[[["",0]]],[[["",0]]],null,[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],[[["",0]],["typeid",3]],null],"p":[[4,"Commands"],[3,"Args"],[13,"Show"],[13,"Download"],[13,"Restore"],[3,"AggregatorHTTPClient"],[8,"AggregatorHandler"],[3,"AggregatorHandlerFake"],[3,"Client"],[3,"Config"],[3,"SnapshotListItem"],[3,"SnapshotFieldItem"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};