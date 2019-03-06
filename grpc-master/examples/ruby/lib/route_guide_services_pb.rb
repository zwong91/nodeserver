# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: route_guide.proto for package 'routeguide'
# Original file comments:
# Copyright 2015 gRPC authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

require 'grpc'
require 'route_guide_pb'

module Routeguide
  module RouteGuide
    # Interface exported by the server.
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'routeguide.RouteGuide'

      # A simple RPC.
      #
      # Obtains the feature at a given position.
      #
      # A feature with an empty name is returned if there's no feature at the given
      # position.
      rpc :GetFeature, Point, Feature
      # A server-to-client streaming RPC.
      #
      # Obtains the Features available within the given Rectangle.  Results are
      # streamed rather than returned at once (e.g. in a response message with a
      # repeated field), as the rectangle may cover a large area and contain a
      # huge number of features.
      rpc :ListFeatures, Rectangle, stream(Feature)
      # A client-to-server streaming RPC.
      #
      # Accepts a stream of Points on a route being traversed, returning a
      # RouteSummary when traversal is completed.
      rpc :RecordRoute, stream(Point), RouteSummary
      # A Bidirectional streaming RPC.
      #
      # Accepts a stream of RouteNotes sent while a route is being traversed,
      # while receiving other RouteNotes (e.g. from other users).
      rpc :RouteChat, stream(RouteNote), stream(RouteNote)
    end

    Stub = Service.rpc_stub_class
  end
end
