#!/bin/bash
curl -I "$QUERY_STRING" 2> /dev/null | grep Content-Type
echo
curl "$QUERY_STRING"
